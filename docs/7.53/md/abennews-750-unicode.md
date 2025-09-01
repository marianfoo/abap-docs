  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

Only Unicode Systems in Release 7.50

From Release 7.50, AS ABAP can only run as a [Unicode system](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry"). Systems with non-Unicode code pages are no longer supported. Therefore, all runnable ABAP programs have the [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") or higher. Programs with the language version [Obsolete ABAP (Non-Unicode)](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry") can no longer be executed. The syntax check can now only run using the rules from the [Unicode check](javascript:call_link\('abenunicode_check_glosry.htm'\) "Glossary Entry"). The [ABAP language version](javascript:call_link\('abenabap_versions.htm'\)) [Obsolete ABAP (Non-Unicode)](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry") can no longer be used.