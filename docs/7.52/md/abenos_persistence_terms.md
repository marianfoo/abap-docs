  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Object Services](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services.htm) →  [Persistence Service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services_persist.htm) → 

Persistence Service Overview

Transient and Persistent Data

ABAP programs work with local program data, which resides in the program’s [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry"). Such data only survives as long as its [context](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontext_2_glosry.htm "Glossary Entry"). This data is transient. Data that can be preserved beyond the runtime of the program is persistent. In AS ABAP, persistent data is usually the content of database tables, but also the content of files on application and presentation servers.

To work with persistent data, the system has to load it into transient data objects of the ABAP program while the program is being executed and then store the data again persistently once it has been processed. During this time, the content of the data exists twice: once in the ABAP program (transiently), and once in the relevant repository (persistently). A typical process reads data from a database table using the SELECT statement into a transient work area, modifies the work area, and then updates the database table (using UPDATE). In such cases, the content of transient and persistent data is different in the interim during this process.

Data in Object-Oriented Programming

In an ideal object-oriented application, data exists only as the attributes of objects (apart from the local helper variables in methods). While the description of an object (that is, the class) exists persistently as source code, its attributes exist only as long as the object. An object in ABAP Objects is transient in principle. It exists in the internal program session only from the time it is created until it is deleted by the garbage collector. Therefore, to work with persistent data in objects, access to their repository must be implemented within the methods of the class.

If a program wants to work with an object straight after and in exactly the same state as another program has left it, there must be a way of saving a summary of data and functions for an object persistently. Classes of objects are already persistent anyway, but some other way of saving the attributes of an object persistently and referencing them to the appropriate class is needed. The Persistence Service enables exactly this.

The Persistence Service for Persistent Objects

Technically speaking, ABAP Objects are always transient, just like the data objects in ABAP programs. There are no persistent objects in ABAP Objects. However, the Persistence Service within Object Services allows application developers to work with persistent objects. The Persistence Service can be thought of as a software layer between the ABAP program and the data repository (that is, the database), which allows the attributes of objects with a unique identity to be saved, and then loaded again when needed.

Put simply, the Persistence Service ensures that an object is initialized in a specified state, and saves the state of that object when required. The relationship between the object and the description of its state in the database is similar to the relationship between transient and persistent data outlined above. The state of the object when it is instantiated reflects the state of the data in the database at that time. Changes to the object state in the ABAP program are not committed to the database immediately, but only after the appropriate request has been made (the COMMIT WORK statement) by the Persistence Service. Thus, a persistent object exists as an original in the database and as a copy in one or more ABAP programs. If multiple programs use the Persistence Service to instantiate objects of the same class before one of these programs has changed the state using COMMIT WORK, all the objects will have the same initial state. There is no lock concept in the Persistence Service, which would ensure that there was only one transient mapping for each persistent object. So ultimately, ABAP programmers are not really working with persistent objects as such; rather, the Persistence Service makes it appear as if they are.

Persistent Classes

To use the Persistence Service for objects, the classes of these objects must have been created as persistent classes in Class Builder. The term persistent class does not imply that a class is persistent (every class is persistent as a template for objects). Instead, it means that the objects of that class and their state are managed by the Persistence Service. When Class Builder creates a persistent class, it automatically generates an associated class, known as the class actor or class agent, whose methods manage the objects of persistent classes. As well as their identity, persistent classes can contain key attributes, which allow the Persistence Service to ensure that the content of each persistent object is unique.

Managed Objects

The objects of persistent classes are managed by the Persistence Service. This means, among other things, that these objects are instantiated with the appropriate methods of the class agent, not directly in the program. These objects are known as managed objects. Objects managed by the Persistence Service can be either persistent or transient.

-   Persistent objects must be managed by the Persistence Service. The Persistence Service connects the object and the database.

-   Transient objects of persistent classes are also managed by the Persistence Service. For example, the Persistence Service ensures that the object is unique within a program (by checking its key attributes), but not for a connection to the database.