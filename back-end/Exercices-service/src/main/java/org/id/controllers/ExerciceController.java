package org.id.controllers;


import org.id.entities.Exercice;
import org.id.repository.ExerciceRepository;
import org.id.services.ExerciceService;
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
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/exercices")
public class ExerciceController {

    @Autowired
    private ExerciceRepository exerciceRepository;
    @Autowired
    private ExerciceService exerciceService;

  
    
    
    @PostMapping
    public ResponseEntity<Exercice> createExercice(
        @RequestParam("title") String title,
        @RequestParam("type") String type,
        @RequestParam("description") String description,
        @RequestParam("duree") String duree,
        @RequestParam("creationDate") String creationDate,
        @RequestParam("file") MultipartFile file,
        @RequestParam("videoUrl") String videourl
    ) {
        
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

        Exercice exercice = new Exercice();
        exercice.setTitle(title);
        exercice.setType(type);
        exercice.setDescription(description);
        exercice.setDuree(duree);
        exercice.setVideourl(videourl);
        
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");
        try {
            Date date = dateFormat.parse(creationDate);
            exercice.setCreationDate(date);
        } catch (ParseException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        exercice.setImagePath("http://localhost:8081/uploads/" + fileName);

        Exercice savedExercice = exerciceRepository.save(exercice);

        return new ResponseEntity<>(savedExercice, HttpStatus.CREATED);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteExercice(@PathVariable Long id){
    	Exercice existexercice=  exerciceService.getExerciceById(id);
    	if(existexercice==null) {
    		return ResponseEntity.notFound().build();
    	}
    	exerciceService.deleteExercice(id);
    	return ResponseEntity.ok().build();
    	
    	
    }

    
    @GetMapping
    public List<Exercice> getAllExercices() {
        return exerciceRepository.findAll();
    }

  
    @GetMapping("/{id}")
    public ResponseEntity<Exercice> getExerciceById(@PathVariable Long id) {
        Exercice exercice = exerciceRepository.findById(id).orElse(null);
        if (exercice == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(exercice);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Exercice> editExercice(
            @PathVariable("id") Long id,
            @RequestParam(value = "title", required = false) String title,
            @RequestParam(value = "type", required = false) String type,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "duree", required = false) String duree,
            @RequestParam(value = "creationDate", required = false) String creationDate,
            @RequestParam(value = "file", required = false) MultipartFile file,
            @RequestParam(value = "videoUrl", required = false) String videourl) {

        Optional<Exercice> optionalExercice = exerciceRepository.findById(id);
        if (!optionalExercice.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Exercice exercice = optionalExercice.get();

     
        if (title != null && !title.isEmpty()) {
            exercice.setTitle(title);
        }
        if (type != null && !type.isEmpty()) {
            exercice.setType(type);
        }
        if (description != null && !description.isEmpty()) {
            exercice.setDescription(description);
        }
        if (duree != null && !duree.isEmpty()) {
            exercice.setDuree(duree);
        }
        if (videourl != null && !videourl.isEmpty()) {
            exercice.setVideourl(videourl);
        }
        if (creationDate != null && !creationDate.isEmpty()) {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");
            try {
                Date date = dateFormat.parse(creationDate);
                exercice.setCreationDate(date);
            } catch (ParseException e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }

       
        if (file != null && !file.isEmpty()) {
            String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
            Path filePath = Paths.get("uploads/" + fileName);
            try {
                Files.write(filePath, file.getBytes());
                exercice.setImagePath("http://localhost:8081/uploads/" + fileName);
            } catch (IOException e) {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        Exercice updatedExercice = exerciceRepository.save(exercice);
        return new ResponseEntity<>(updatedExercice, HttpStatus.OK);
    }

    
    
    
    
    
    
  
    
    
    
  



  
    
    
   
}
