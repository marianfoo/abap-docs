  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.50](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-750.htm) → 

Only Unicode Systems in Release 7.50

From Release 7.50, AS ABAP can only run as a [Unicode system](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_system_glosry.htm "Glossary Entry"). Systems with non-Unicode code pages are no longer supported. Therefore, all runnable ABAP programs have the [ABAP language version](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_version_glosry.htm "Glossary Entry") [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_abap_glosry.htm "Glossary Entry") or higher. Programs with the language version [Obsolete ABAP (Non-Unicode)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennon_uc_prog_glosry.htm "Glossary Entry") can no longer be executed. The syntax check can now only run using the rules from the [Unicode check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_check_glosry.htm "Glossary Entry"). The [ABAP language version](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_versions.htm) [Obsolete ABAP (Non-Unicode)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennon_uc_prog_glosry.htm "Glossary Entry") can no longer be used.