---
title: "EXPORT DYNPRO"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax EXPORT DYNPRO h f e m ID id. Effect Exports the dynpro(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm 'Glossary Entry') with the name in the id. The dynpro information is
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexport_dynpro.htm"
abapFile: "abapexport_dynpro.htm"
keywords: ["do", "if", "try", "internal-table", "abapexport", "dynpro"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_dynamic.htm) →  [Screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_generic_dynpro.htm) →  [Internal Statements for Editing Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneric_dynpro_internal.htm) → 

EXPORT DYNPRO

This statement is for internal use only.
It must not be used in application programs.

Syntax

EXPORT DYNPRO h f e m ID id.

Effect

Exports the [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") with the name in the id. The dynpro information is taken from the structure h (dynpro header, dictionary structure D020S) and the internal tables f (field list, structure D021S), e (flow logic, structure D022S), and m (matchcode information, structure D023S). f, e, and m, can be specified as standard tables without secondary keys.