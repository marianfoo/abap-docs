  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.54](javascript:call_link\('abennews-754.htm'\)) → 

ABAP Unit in Release 7.54

[1\. Using test classes](#!ABAP_MODIFICATION_1@1@)

Modification 1

Using Test Classes

[Test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") and their components cannot be addressed in the production code of programs and must be addressed only in other test classes. A static check and a full check at runtime are now applied to verify this. Until now it was possible to address certain components of test class in production code. In production systems, this required the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") abap/test\_generation to be set accordingly.