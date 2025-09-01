---
title: "INFOTYPES - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinfotypes.htm) Syntax INFOTYPES nnnn NAME name OCCURS n MODE N VALID FROM intlim1 TO intlim2 AS PERSON TABLE. Effect Special Statement: Creates an internal table with the name pnnnn for
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinfotypes_shortref.htm"
abapFile: "abapinfotypes_shortref.htm"
keywords: ["do", "try", "data", "types", "internal-table", "abapinfotypes", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  I

INFOTYPES - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinfotypes.htm)

Syntax

INFOTYPES nnnn *\[*NAME name*\]*
               *\[*OCCURS n*\]*
               *\[*MODE N*\]*
               *\[*VALID FROM intlim1 TO intlim2*\]*
               *\[*AS PERSON TABLE*\]*.

Effect

Special Statement:
Creates an internal table with the name pnnnn for an infotype of the SAP ERP component HR.

Additions

-   nnnn
    Four-digit, numeric key of an info type.
    
-   NAME name
    Defines the name of the internal table as name.
    
-   OCCURS n
    Defines the initial memory usage of the internal table.
    
-   MODE N
    Prevents linking to special [logical databases](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").
    
-   VALID FROM intlim1 TO intlim2
    Creates the columns intlim1 and intlim2 for the obsolete abbreviated form of [PROVIDE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapprovide_obsolete.htm) as interval limits.
    
-   AS PERSON TABLE
    Creates the name of the internal table as ppnnnn.