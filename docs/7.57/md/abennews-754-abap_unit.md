  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.54](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-754.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Unit in Release 7.54, ABENNEWS-754-ABAP_UNIT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

ABAP Unit in Release 7.54

Modification

Using Test Classes

[Test classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentest_class_glosry.htm "Glossary Entry") and their components cannot be addressed in the production code of programs and must be addressed only in other test classes. A static check and a full check at runtime are now applied to verify this. Until now it was possible to address certain components of test class in production code. In production systems, this required the [profile parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/test\_generation to be set accordingly.