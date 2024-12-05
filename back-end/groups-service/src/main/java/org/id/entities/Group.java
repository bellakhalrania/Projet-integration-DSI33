package org.id.entities;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name= "groups")
public class Group {

	@Id   
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String name;
	private String imagePath;
    private String groupurl;
    
    public Group() {}

	public Group(Long id, String imagePath, String groupurl, String name) {
		super();
		this.id = id;
		this.name=name;
		this.imagePath = imagePath;
		this.groupurl = groupurl;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public String getGroupurl() {
		return groupurl;
	}

	public void setGroupurl(String groupurl) {
		this.groupurl = groupurl;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Group [id=" + id + ", name=" + name + ", imagePath=" + imagePath + ", groupurl=" + groupurl + "]";
	}

	
    
    
    
    
	
}




	