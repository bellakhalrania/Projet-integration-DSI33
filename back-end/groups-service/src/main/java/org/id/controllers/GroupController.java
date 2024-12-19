package org.id.controllers;

import org.id.entities.Group;
import org.id.repository.GroupRepository;
import org.id.services.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;




@RestController
@RequestMapping("/api/groups")
//@CrossOrigin(origins = "http://localhost:4200") 

public class GroupController {


    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private GroupService groupService;

  
    @GetMapping
    public List<Group> getAllGroups() {
        return groupRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Group> getGroupById(@PathVariable Long id) {
    	Group group = groupRepository.findById(id).orElse(null);
        if (group == null) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(group);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteGroup(@PathVariable Long id){
    	Group existgroup=  groupService.getGroupById(id);
    	if(existgroup==null) {
    		return ResponseEntity.notFound().build();
    	}
    	groupService.deleteGroup(id);
    	return ResponseEntity.ok().build();	
    }
    
    @PostMapping
    public ResponseEntity<Group> createGroup(
        @RequestParam("file") MultipartFile file,
        @RequestParam("groupUrl") String groupUrl,
        @RequestParam("name") String name
    ) {
        // Ensure uploads directory exists
        Path uploadsDir = Paths.get("uploads");
        if (!Files.exists(uploadsDir)) {
            try {
                Files.createDirectories(uploadsDir);
            } catch (IOException e) {
                e.printStackTrace();
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        if (file.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get("uploads/" + fileName);

        try {
            Files.write(filePath, file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        Group group = new Group();
        
        group.setGroupurl(groupUrl);
        group.setName(name);
        

        group.setImagePath("http://localhost:8084/uploads/" + fileName);

        Group savedGroup = groupRepository.save(group);

        return new ResponseEntity<>(savedGroup, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Group> editGroup(
            @PathVariable("id") Long id,
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "file", required = false) MultipartFile file,
            @RequestParam(value = "groupUrl", required = false) String groupUrl
            ){

        Optional<Group> optionalGroup = groupRepository.findById(id);
        if (!optionalGroup.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Group group = optionalGroup.get();

       
        if (groupUrl != null && !groupUrl.isEmpty()) {
        	group.setGroupurl(groupUrl);
        }
        
        if (name != null && !name.isEmpty()) {
        	group.setName(name);
        }
        
        
        // Handle image update if a new image is provided
        if (file != null && !file.isEmpty()) {
            String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
            Path filePath = Paths.get("uploads/" + fileName);
            try {
                Files.write(filePath, file.getBytes());
                group.setImagePath("http://localhost:8084/uploads/" + fileName);
            } catch (IOException e) {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        Group updatedGroup = groupRepository.save(group);
        return new ResponseEntity<>(updatedGroup, HttpStatus.OK);
    }
}