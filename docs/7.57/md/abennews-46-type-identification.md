  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Description of Data Types and Object Types at Runtime in Release 4.6A, ABENNEWS-46-TY
PE-IDENTIFICATION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Description of Data Types and Object Types at Runtime in Release 4.6A

From Release 4.6A, types can be described dynamically.

Previously, the statement [DESCRIBE](javascript:call_link\('abapdescribe_field.htm'\)) could only describe some of the [ABAP types](javascript:call_link\('abentypes_objects_oview.htm'\)). With the introduction of ABAP Objects, an [RTTI concept](javascript:call_link\('abenrtti.htm'\)) based on system classes was implemented that enhances the description to include any data types and object types at runtime.

Example for the description of a field

tdescr =  cl\_abap\_typedescr=>describe\_by\_data( f ).

Example for the description of a data reference

tdescr ?= cl\_abap\_typedescr=>describe\_by\_data\_ref( dref ).

Example for the description of an object reference

tdescr ?= cl\_abap\_typedescr=>describe\_by\_object\_ref( oref ).

Examples for descriptions using type names

tdescr = cl\_abap\_typedescr=>describe\_by\_name( name ).

The type description classes contain all of the attributes and methods that can be assigned to the properties of the different types.