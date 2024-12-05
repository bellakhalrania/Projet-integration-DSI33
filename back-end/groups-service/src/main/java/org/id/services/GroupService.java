package org.id.services;




import java.util.List;

import org.id.entities.Group;
import org.id.repository.GroupRepository;
import org.springframework.stereotype.Service;
@Service

public class GroupService {


    
    private final GroupRepository groupRepository; 
    

    
    public GroupService(GroupRepository groupRepository) {
		
		this.groupRepository = groupRepository;
	}

	public Group postGroup(Group group) {
        return groupRepository.save(group);
    }
	
	public List<Group> getAllGroup(){
		return groupRepository.findAll();
	}
	
	public Group getGroupById(Long id) {
		return groupRepository.findById(id).orElse(null);
	}
	
	public Group updateGroup(Group group) {
		return groupRepository.save(group); 
	}

	public void deleteGroup(Long id) {
		groupRepository.deleteById(id);
		
	}
}

