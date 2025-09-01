  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Contexts (Obsolete)](javascript:call_link\('abencontext.htm'\)) → 

SUPPLY

[Short Reference](javascript:call_link\('abapsupply_shortref.htm'\))

Obsolete Syntax

SUPPLY key1 = f1 key2 = f2 ... TO CONTEXT context\_ref.

Effect

This statement fills the key fields key1 key2 ... of a [context](javascript:call_link\('abencontext_glosry.htm'\) "Glossary Entry") instance with the values of data objects f1 f2 ... context\_ref expects a data object that points to a context instance (see [CONTEXTS](javascript:call_link\('abapcontexts.htm'\))). The names of key fields of the context in question can be specified for key1 key2 ... f1 f2 ... expects data objects whose data type matches the respective key field key1 key2 ...

The SUPPLY statement overwrites only the specified key fields with new values. If not all key fields are specified, the previous values are kept. The values of all fields of the context instance derived from a changed key field are rendered invalid by the SUPPLY statement.