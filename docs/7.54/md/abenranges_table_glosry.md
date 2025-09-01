  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

ranges table

[Internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") with the columns SIGN, OPTION, LOW, and HIGH. Declared using the addition [TYPE RANGE OF](javascript:call_link\('abaptypes_ranges.htm'\)) of the statements [DATA](javascript:call_link\('abapdata.htm'\)) and [TYPES](javascript:call_link\('abaptypes.htm'\)) , or the statement [RANGES](javascript:call_link\('abapranges.htm'\)) . A ranges table is used as the internal repository of a [ranges condition](javascript:call_link\('abenranges_condition_glosry.htm'\) "Glossary Entry"). A ranges table can be evaluated in a [comparison expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") using the [relational operator](javascript:call_link\('abenrelational_operator_glosry.htm'\) "Glossary Entry") [IN](javascript:call_link\('abenlogexp_select_option.htm'\)), where each row of the table represents a separate comparison. A [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") declared with [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) has the same structure as a ranges table.