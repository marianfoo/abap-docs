  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for ABAP Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Description%20of%20Data%20Types%20and%20Object%20Types%20at%20Runtime%20in%20Release%204.6A%2C%20ABENNEWS-46-TYPE-IDENTIFICATION%2C%20758%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Description of Data Types and Object Types at Runtime in Release 4.6A

From Release 4.6A, types can be described dynamically.

Previously, the statement [DESCRIBE](javascript:call_link\('abapdescribe_field.htm'\)) could only describe some of the [ABAP types](javascript:call_link\('abentypes_and_objects.htm'\)). With the introduction of ABAP Objects, an [RTTI concept](javascript:call_link\('abenrtti.htm'\)) based on system classes was implemented that enhances the description to include any data types and object types at runtime.

Example for the description of a field

tdescr =  cl\_abap\_typedescr=>describe\_by\_data( f ).

Example for the description of a data reference

tdescr ?= cl\_abap\_typedescr=>describe\_by\_data\_ref( dref ).

Example for the description of an object reference

tdescr ?= cl\_abap\_typedescr=>describe\_by\_object\_ref( oref ).

Examples for descriptions using type names

tdescr = cl\_abap\_typedescr=>describe\_by\_name( name ).

The type description classes contain all of the attributes and methods that can be assigned to the properties of the different types.