  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

host variable

ABAP [data object](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") specified in an operand position of an [ABAP SQL](javascript:call_link\('abenabap_sql_host_variables.htm'\)) statement or of a statically embedded [Native SQL](javascript:call_link\('abapexec_host.htm'\)) statement . The ABAP data object can be a [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") or a [constant](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry") (see [host constant](javascript:call_link\('abenhost_constant_glosry.htm'\) "Glossary Entry")). In ABAP SQL, a host variable must be prefixed with the [escape character](javascript:call_link\('abenescape_character_glosry.htm'\) "Glossary Entry") @ ; in Native SQL with the escape character : . In [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry"), the placeholder ? to which ABAP data objects are bound, is used instead of host variables.