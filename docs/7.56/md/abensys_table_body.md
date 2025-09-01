---
title: "Obsolete Syntax"
description: |
  ... itab-sys ... Effect If itab is an obsolete standard table with a header line(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenheader_line_glosry.htm 'Glossary Entry'), instead of specifying itab to address the table body, the pseudo component itab-sys can be used. Thi
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensys_table_body.htm"
abapFile: "abensys_table_body.htm"
keywords: ["select", "do", "if", "try", "data", "internal-table", "abensys", "table", "body"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_obsolete.htm) → 

\*sys\*, Obsolete Pseudo Component

Obsolete Syntax

... itab-\*sys\* ...

Effect

If itab is an obsolete standard table with a [header line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenheader_line_glosry.htm "Glossary Entry"), instead of specifying itab\[\] to address the table body, the pseudo component itab-\*sys\* can be used. This also addresses the table body.

Hint

If tables with header lines are also to be accessed, only itab\[\] should be used to address the table body, not itab-\*sys\*.

Example

This example shows that itab-\*sys\* has the same meaning as itab\[\].

DATA itab TYPE TABLE OF scarr WITH HEADER LINE.
SELECT \*
       FROM scarr
       INTO TABLE @itab.
ASSERT itab\[\] = itab-\*sys\*.