  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Modularization](javascript:call_link\('abenobsolete_modularization.htm'\)) →  [Subroutines](javascript:call_link\('abenabap_subroutines.htm'\)) →  [FORM](javascript:call_link\('abapform.htm'\)) → 

FORM - table\_parameters

[Quick Reference](javascript:call_link\('abapform_shortref.htm'\))

Obsolete Syntax

... t1 *\[**{*TYPE itab\_type*}**|**{*LIKE itab*}**|**{*STRUCTURE struc*}**\]*
    t2 *\[**{*TYPE itab\_type*}**|**{*LIKE itab*}**|**{*STRUCTURE struc*}**\]*
    ...

Effect

Defines [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry") t1 t2 ... for subroutines

A table type table\_type or an internal table itab from the table category [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") can be specified after the additions TYPE and LIKE.

The additions TYPE and LIKE type the row type of the formal parameter with the row type of the specified internal table. The other obsolete addition, [STRUCTURE](javascript:call_link\('abapform_parameters.htm'\)), stamps the row type with the [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") struc.

When TABLES parameters are accessed that are not bound to any type-friendly actual parameters, the same [exception situation](javascript:call_link\('abentables_parameters_restrictions.htm'\)) can arise as in function modules.

Note

The definition of table parameters is obsolete and can be replaced by general [formal parameters](javascript:call_link\('abapform_parameters.htm'\)) defined using USING and CHANGING.