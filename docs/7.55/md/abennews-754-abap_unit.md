  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-754.htm) → 

ABAP Unit in Release 7.54

[1\. Using test classes](#!ABAP_MODIFICATION_1@1@)

Modification 1

Using Test Classes

[Test classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_class_glosry.htm "Glossary Entry") and their components cannot be addressed in the production code of programs and must be addressed only in other test classes. A static check and a full check at runtime are now applied to verify this. Until now it was possible to address certain components of test class in production code. In production systems, this required the [profile parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/test\_generation to be set accordingly.