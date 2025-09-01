  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

external procedure call

[Procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") call from a different ABAP program in the same [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry"). The first time one of its procedures is called, the required program is loaded into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the calling program (if not already there) and, the [event](javascript:call_link\('abenevent_glosry.htm'\) "Glossary Entry") [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) is triggered (except in [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry")). See also [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry").

[→ More](javascript:call_link\('abencall_procedures_extern.htm'\))