  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-4.htm) →  [Changes in Release 4.6A](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-46a.htm) → 

Description of Data Types and Object Types at Runtime in Release 4.6A

From Release 4.6A, types can be described dynamically.

Previously, the statement [DESCRIBE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdescribe_field.htm) could only describe some of the [ABAP types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_objects_oview.htm). With the introduction of ABAP Objects, an [RTTI concept](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrtti.htm) based on system classes was implemented that enhances the description to include any data types and object types at runtime.

Example for the description of a field

tdescr =  cl\_abap\_typedescr=>describe\_by\_data( f ).

Example for the description of a data reference

tdescr ?= cl\_abap\_typedescr=>describe\_by\_data\_ref( dref ).

Example for the description of an object reference

tdescr ?= cl\_abap\_typedescr=>describe\_by\_object\_ref( oref ).

Examples for descriptions using type names

tdescr = cl\_abap\_typedescr=>describe\_by\_name( name ).

The type description classes contain all of the attributes and methods that can be assigned to the properties of the different types.