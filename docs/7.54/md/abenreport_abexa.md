---
title: "Logical Database, Associated with a Program"
description: |
  This example demonstrates how a logical database is associated with an executable program. Source Code REPORT demo_report. NODES: spfli, sflight, sbook. DATA: weight       TYPE p LENGTH 8 DECIMALS 4, total_weight TYPE p LENGTH 8 DECIMALS 4. INITIALIZATION. carrid-sign = 'I'. carrid-option = 'EQ'.
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreport_abexa.htm"
abapFile: "abenreport_abexa.htm"
keywords: ["select", "do", "try", "data", "abenreport", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenldb.htm) →  [Logical Databases - Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenldb_examples.htm) → 

Logical Database, Associated with a Program

This example demonstrates how a logical database is associated with an executable program.

Source Code

REPORT demo\_report.
NODES: spfli, sflight, sbook.
DATA: weight       TYPE p LENGTH 8 DECIMALS 4,
      total\_weight TYPE p LENGTH 8 DECIMALS 4.
INITIALIZATION.
  carrid-sign = 'I'.
  carrid-option = 'EQ'.
  carrid-low = 'AA'.
  carrid-high = 'LH'.
  APPEND carrid TO carrid.
START-OF-SELECTION.
  WRITE 'Luggage weight of flights'.
GET spfli FIELDS carrid connid cityfrom cityto.
  SKIP.
  ULINE.
  WRITE: / 'Carrid:', spfli-carrid,
           'Connid:', spfli-connid,
         / 'From:  ', spfli-cityfrom,
           'To:    ', spfli-cityto.
  ULINE.
GET sflight FIELDS fldate.
  SKIP.
  WRITE: / 'Date:', sflight-fldate.
GET sbook FIELDS luggweight.
  weight += sbook-luggweight.
GET sflight LATE FIELDS carrid .
  WRITE: / 'Luggage weight =', weight.
  total\_weight += weight.
  weight = 0.
END-OF-SELECTION.
  ULINE.
  WRITE: / 'Sum of luggage weights =', total\_weight.

Description

This example shows a typical report where the [logical database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") F1S is assigned to its properties.