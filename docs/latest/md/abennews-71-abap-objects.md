  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-70_ehps.htm) →  [News for ABAP Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-71.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20in%20ABAP%20Release%207.0%2C%20EhP2%2C%20ABENNEWS-71-ABAP-OBJECTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

ABAP Objects in ABAP Release 7.0, EhP2

[1\. Declaring Instance Constructors](#!ABAP_MODIFICATION_1@1@)
[2\. C Destructor](#!ABAP_MODIFICATION_2@2@)
[3\. Constants in Class Pools](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Declaring Instance Constructors

From ABAP release 7.0, EhP2, the statement [METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_constructor.htm) can be used to declare an [instance constructor](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninstance_constructor_glosry.htm "Glossary Entry") in all [visibility sections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvisibility_section_glosry.htm "Glossary Entry"), whose instantiability is more general than or equal to that specified in the addition [CREATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_options.htm) of the statement [CLASS DEFINITION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm). Until now, this was only possible with the public visibility section (this modification was also transported to ABAP release 7.0).

Modification 2   

C Destructor

From ABAP release 7.0, EhP2, more than one attribute can be passed in the [C destructor](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc_destructor.htm) when SYSTEM-CALL is used.

Modification 3   

Constants in Class Pools

From ABAP release 7.0, EhP2, local program constants can be declared in a class pool. The private components and methods of the global class can access these constants.