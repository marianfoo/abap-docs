---
title: "SORT - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_extract.htm) Syntax SORT ASCENDINGDESCENDING AS TEXT STABLE BY field1 ASCENDINGDESCENDING AS TEXT field2 ASCENDINGDESCENDING AS TEXT ...
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_shortref.htm"
abapFile: "abapsort_shortref.htm"
keywords: ["do", "if", "try", "data", "abapsort", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  S

SORT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_extract.htm)

Syntax

SORT *\[*ASCENDING*|*DESCENDING*\]*
     *\[*AS TEXT*\]*
     *\[*STABLE*\]*
     *\[*BY *{*field1 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]**}*
         *{*field2 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]**}*
         ...*\]*.

Effect

Obsolete: Sorts the [extract dataset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry") after the [field group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield_group_glosry.htm "Glossary Entry") header.

Additions

-   [ASCENDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_extract.htm)
    Sorts in ascending order.
    
-   [DESCENDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_extract.htm)
    Sorts in descending order.
    
-   [AS TEXT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_extract.htm)
    Sorts text-like components in accordance with the [locale](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocale_glosry.htm "Glossary Entry") of the current [text environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_environment_glosry.htm "Glossary Entry").
    
-   [STABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_extract.htm)
    Ensures stable sorting by retaining the relative order of non-affected lines.
    
-   [BY field1 ... field2 ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_key.htm)
    Sorts by specified fields field1, field2, ... instead of by field group header.