---
title: "DATA BEGIN OF - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_struc.htm) Syntax DATA BEGIN OF struc READ-ONLY OCCURS n. ... INCLUDE ...(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinclude_type_shortref.htm) ... DATA END OF struc VALID BETWEE
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_begin_of_shortref.htm"
abapFile: "abapdata_begin_of_shortref.htm"
keywords: ["do", "try", "class", "data", "internal-table", "abapdata", "begin", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  D

DATA BEGIN OF - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_struc.htm)

Syntax

DATA BEGIN OF struc *\[*READ-ONLY*\]* *\[*OCCURS n*\]*.
  ...
  [INCLUDE ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinclude_type_shortref.htm)
  ...
DATA END OF struc *\[*VALID BETWEEN intlim1 AND intlim2*\]*.

Effect

Declares a data object or instance attribute struc. This variant of the statement DATA creates a structure whose components can be declared using any DATA statements or adopted from other structures using INCLUDE.

Additions

-   [READ-ONLY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_options.htm)
    Protects a non-private structure against writes from outside its own class.
    
-   [OCCURS n](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_begin_of_occurs.htm)
    Obsolete: Creates an internal table with a structured row type, [standard key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_key_glosry.htm "Glossary Entry"), a [header line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheader_line_glosry.htm "Glossary Entry"), and initial memory requirement n.
    
-   [VALID BETWEEN intlim1 AND intlim2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_begin_of_occurs.htm)
    Obsolete: Defines the columns intlim1 and intlim2 in an internal table, created using OCCURS, as interval limits for the obsolete short form of [PROVIDE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapprovide_obsolete.htm).