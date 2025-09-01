  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-6.htm) →  [News for Release 6.40](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-640.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects in Release 6.40, ABENNEWS-640-OBJECTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects in Release 6.40

[1\. Data Types and Constants in the Visibility Section of Global Classes](#!ABAP_MODIFICATION_1@1@)
[2\. Access to Static Components of Object Types](#!ABAP_MODIFICATION_2@2@)
[3\. Use of Alias Names](#!ABAP_MODIFICATION_3@3@)
[4\. Unused Private Components](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Data Types and Constants in the Visibility Section of Global Classes

From Release 6.40, data types and constants can be created in the public [visibility section](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of global classes and interfaces, which was not previously possible. Classes and interfaces therefore make the use of [type pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_pool_glosry.htm "Glossary Entry") superfluous, whereas for types and constants names that are longer than the names in the type pools are possible.

Modification 2   

Access to Static Components of Object Types

The statements [CLASS cl DEFINITION LOAD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_deferred.htm) and [INTERFACE in LOAD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface_deferred.htm) are now only necessary if source code contains recursive accesses to global classes or interfaces. Until now, these statements always had to be specified if [static components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_component_glosry.htm "Glossary Entry") of global classes or interfaces were being accessed for the first time. Transaction SYNT, to which a trace for these object types has been added, can be used to detect recursive class and interface definitions.

Hint

This change was also transported back to Release 6.20.

Modification 3   

Use of Alias Names

From Release 6.40, it is possible to specify the alias names of the methods defined using [ALIASES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapaliases.htm) in the implementation of methods using the statement METHOD and in the [redefinition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenredefinition_glosry.htm "Glossary Entry") of methods using the statement METHODS ...REDEFINITION. At the same time, however, from Release 6.40 there will be a warning about the syntax check if identical components are accessed within a class declaration or a method with different names.

Modification 4   

Unused Private Components

From Release 6.40, all unused private components of a class produce a warning in the extended program check. Private methods must be called and private events must be both raised and handled.