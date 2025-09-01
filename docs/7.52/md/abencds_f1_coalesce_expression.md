  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Built-In Functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) →  [ABAP CDS - sql\_functions](javascript:call_link\('abencds_f1_sql_functions.htm'\)) → 

ABAP CDS - coalesce

Syntax

... COALESCE( arg1, arg2 ) ...

Effect

Coalesce function in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The coalesce function returns the value of the argument arg1 (if this is not the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry")); otherwise it returns the value of the argument arg2. The arguments can be literals, fields of a data source, input parameters, predefined functions, or expressions of data types [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)), [SSTR](javascript:call_link\('abenddic_builtin_types.htm'\)), [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)), [LANG](javascript:call_link\('abenddic_builtin_types.htm'\)), [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)), [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), or [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)) or [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)).

The data types of both arguments must either match of the data type of one argument must represent the full value of the other data type. The result has the dictionary type of the argument with the greater value range.