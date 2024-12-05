package org.id.entities;


import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name= "Exercice")
public class Exercice {
	@Id   
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	 private String title; 
     private String description;
     private String Type;
     private String Duree;
     private String imagePath;
     private Date CreationDate;
     private String videourl;

	public Exercice() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getVideourl() {
		return videourl;
	}

	public void setVideourl(String videourl) {
		this.videourl = videourl;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getType() {
		return Type;
	}

	public void setType(String type) {
		Type = type;
	}

	public String getDuree() {
		return Duree;
	}

	public void setDuree(String duree) {
		Duree = duree;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public Date getCreationDate() {
		return CreationDate;
	}

	public void setCreationDate(Date creationDate) {
		CreationDate = creationDate;
	}

	public Exercice(Long id, String title, String description, String type, String duree, String imagePath,String videourl,
			Date creationDate) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.videourl=videourl;
		Type = type;
		Duree = duree;
		this.imagePath = imagePath;
		CreationDate = creationDate;
	}

	@Override
	public String toString() {
		return "Exercice [id=" + id + ", title=" + title + ", description=" + description + ", Type=" + Type
				+ ", Duree=" + Duree + ", imagePath=" + imagePath + ", CreationDate=" + CreationDate + ", videourl="
				+ videourl + "]";
	}

	
	
}
