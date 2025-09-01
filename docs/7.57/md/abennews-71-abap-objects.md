  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-70_ehps.htm) →  [News for Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-71.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects in Release 7.0, EhP2, ABENNEWS-71-ABAP-OBJECTS, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects in Release 7.0, EhP2

[1\. Declaring Instance Constructors](#!ABAP_MODIFICATION_1@1@)
[2\. C Destructor](#!ABAP_MODIFICATION_2@2@)
[3\. Constants in Class Pools](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Declaring Instance Constructors

From Release 7.0, EhP2, the statement [METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_constructor.htm) can be used to declare an [instance constructor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninstance_constructor_glosry.htm "Glossary Entry") in all [visibility sections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvisibility_section_glosry.htm "Glossary Entry"), whose instantiability is more general than or equal to that specified in the addition [CREATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_options.htm) of the statement [CLASS DEFINITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm). Until now, this was only possible with the public visibility section (this modification was also transported to Release 7.0).

Modification 2   

C Destructor

From Release 7.0, EhP2, more than one attribute can be passed in the [C destructor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc_destructor.htm) when SYSTEM-CALL is used.

Modification 3   

Constants in Class Pools

From Release 7.0, EhP2, local program constants can be declared in a class pool. The private components and methods of the global class can access these constants.