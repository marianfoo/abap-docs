---
title: "IMPORT DYNPRO"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax IMPORT DYNPRO h f e m ID id. Effect The dynpro(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm 'Glossary Entry') specified in the structure id is imported. To enable this,
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapimport_dynpro.htm"
abapFile: "abapimport_dynpro.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abapimport", "dynpro"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_dynamic.htm) →  [Screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_generic_dynpro.htm) →  [Internal Statements for Editing Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneric_dynpro_internal.htm) → 

IMPORT DYNPRO

This statement is for internal use only.
It must not be used in application programs.

Syntax

IMPORT DYNPRO h f e m ID id.

Effect

The [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") specified in the structure id is imported. To enable this, the structure id must contain two components for the name of the program and the ID of the dynpro in the following order:

-   A component of type PROGNAME
    
-   A component of type SYDYNNR.
    

The dynpro information is loaded into the structure h (dynpro header, structure D020S) and into the internal tables f (field list, structure D021S), e (flow logic, structure D022S), and m (matchcode information, structure D023S). f, e, and m, can be specified as standard tables without secondary keys.

Note

As an alternative to a structure, a character-like field (including string) can be specified for id, where the field contains the chained contents of the structure components (including trailing blanks).

System Fields

sy-subrc

Meaning

0

The dynpro was imported.

4

The dynpro does not exist.

Example

Reads the attributes of dynpro "0100" of the program DEMO\_DYNPRO.

DATA h TYPE d020s.
DATA f TYPE TABLE OF d021s.
DATA e TYPE TABLE OF d022s.
DATA m TYPE TABLE OF d023s.
DATA: BEGIN OF id,
         p TYPE progname VALUE 'DEMO\_DYNPRO',
         d TYPE sydynnr  VALUE '0100',
       END OF id.
IMPORT DYNPRO h f e m ID id.