  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_dynamic.htm) →  [Dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_generic_dynpro.htm) →  [Internal Statements for Editing Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneric_dynpro_internal.htm) → 

DELETE DYNPRO

This statement is for internal use only.
It must not be used in application programs.

Syntax

DELETE DYNPRO f.

Effect

Deletes the [dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") with the name specified in the field f.

System Fields

sy-subrc

Meaning

0

The dynpro was deleted.

4

The dynpro does not exist.

The content of f consists of the 40 character program name and the four digit [dynpro number](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_number_glosry.htm "Glossary Entry").

Example

DATA DYNPRONAME(44) VALUE 'SAPTEST'.
DYNPRONAME+40 = '0100'.
DELETE DYNPRO DYNPRONAME.