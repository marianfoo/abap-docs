---
title: "Obsolete Syntax"
description: |
  ... itab-sys ... Effect If itab is an obsolete standard table with a header line(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm 'Glossary Entry'), instead of specifying itab to address the table body, the pseudo component itab-sys can be used. Thi
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensys_table_body.htm"
abapFile: "abensys_table_body.htm"
keywords: ["select", "do", "if", "try", "data", "internal-table", "abensys", "table", "body"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_obsolete.htm) → 

\*sys\*, Obsolete Pseudo Component

Obsolete Syntax

... itab-\*sys\* ...

Effect

If itab is an obsolete standard table with a [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry"), instead of specifying itab\[\] to address the table body, the pseudo component itab-\*sys\* can be used. This also addresses the table body.

Note

If you also need to access tables with header lines, only use itab\[\] to address the table body, not itab-\*sys\*.

Example

This example shows that itab-\*sys\* has the same meaning as itab\[\].

DATA itab TYPE TABLE OF scarr WITH HEADER LINE.
SELECT \*
       FROM scarr
       INTO TABLE @itab.
ASSERT itab\[\] = itab-\*sys\*.