  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Dynpros in Release 7.53

[1\. Reference value for conversion routines](#!ABAP_MODIFICATION_1@1@)

Modification 1

Reference Value for Conversion Routines

An optional input parameter with the predefined name REFVAL can be created for the function modules for [conversion routines](javascript:call_link\('abenconversion_exits.htm'\)). When a dynpro field of the type [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) or [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) is converted, this parameter is given the value of a an associated reference field of the type [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)) or [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)) automatically If [WRITE USING EDIT MASK](javascript:call_link\('abapwrite_to_options.htm'\)) is used, the input parameter REFVAL is not filled.