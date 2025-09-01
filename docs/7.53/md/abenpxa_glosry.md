  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

PXA

Program Execution Area. Memory for managing the fixed data of an ABAP program while it is being executed. The PXA notably contains the [byte codes](javascript:call_link\('abenbytecode_glosry.htm'\) "Glossary Entry") of all programs running concurrently at a specific time on an [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry"). This memory is shared by all [internal sessions](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the AS Instance and there is only one such memory on each server. The byte code of a program that is executed once remains buffered in the PXA as a program [load](javascript:call_link\('abenload_glosry.htm'\) "Glossary Entry") for as long as possible to prevent the data being reloaded from the database if the program is executed again. Furthermore, the PXA buffers shared resources, such as values of [constants](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry"), and enables [initial value sharing](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry") in [boxed components](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry").