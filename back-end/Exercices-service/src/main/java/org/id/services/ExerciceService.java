package org.id.services;



import java.util.List;

import org.id.entities.Exercice;
import org.id.repository.ExerciceRepository;
import org.springframework.stereotype.Service;
@Service

public class ExerciceService {


    
    private final ExerciceRepository exerciceRepository; 
    

    
    public ExerciceService(ExerciceRepository exerciceRepository) {
		
		this.exerciceRepository = exerciceRepository;
	}

	public Exercice postExercice(Exercice exercice) {
        return exerciceRepository.save(exercice);
    }
	
	public List<Exercice> getAllExercice(){
		return exerciceRepository.findAll();
	}
	
	public Exercice getExerciceById(Long id) {
		return exerciceRepository.findById(id).orElse(null);
	}
	
	public Exercice updateExercice(Exercice exercice) {
		return exerciceRepository.save(exercice); 
	}

	public void deleteExercice(Long id) {
		exerciceRepository.deleteById(id);
		
	}
}

