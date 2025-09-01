  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

PXA

Short for Program Execution Area. Memory for managing the fixed data of a running ABAP program. The PXA notably contains the [byte codes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbytecode_glosry.htm "Glossary Entry") of all programs running simultaneously on an [AS instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_instance_glosry.htm "Glossary Entry"). This memory is shared by all [internal sessions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the AS instance, and there is only one such memory on each server. The byte code of a program that is executed once remains buffered in the PXA as a program [load](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenload_glosry.htm "Glossary Entry") for as long as possible to prevent reloads from the database if the program is executed again. Furthermore, the PXA buffers shared resources, such as values of [constants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstant_glosry.htm "Glossary Entry"), and is used for the [initial value sharing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry") of [boxed components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenboxed_component_glosry.htm "Glossary Entry").