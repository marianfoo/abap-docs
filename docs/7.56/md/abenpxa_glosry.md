  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

PXA

Short for Program Execution Area. Memory for managing the fixed data of a running ABAP program. The PXA notably contains the [byte codes](javascript:call_link\('abenbytecode_glosry.htm'\) "Glossary Entry") of all programs running simultaneously on an [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry"). This memory is shared by all [internal sessions](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the AS instance, and there is only one such memory on each server. The byte code of a program that is executed once remains buffered in the PXA as a program [load](javascript:call_link\('abenload_glosry.htm'\) "Glossary Entry") for as long as possible to prevent reloads from the database if the program is executed again. Furthermore, the PXA buffers shared resources, such as values of [constants](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry"), and is used for the [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry") of [boxed components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry").