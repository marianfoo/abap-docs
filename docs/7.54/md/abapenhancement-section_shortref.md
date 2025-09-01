---
title: "ENHANCEMENT-SECTION - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section.htm) Syntax ENHANCEMENT-SECTION enh_id SPOTS spot1 spot2 ... STATIC INCLUDE BOUND. ... END-ENHANCEMENT-SECTION. Effect Defines a section of the source code as an enhancement point(https:
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section_shortref.htm"
abapFile: "abapenhancement-section_shortref.htm"
keywords: ["do", "try", "abapenhancement", "section", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  E

ENHANCEMENT-SECTION - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section.htm)

Syntax

ENHANCEMENT-SECTION enh\_id SPOTS spot1 spot2 ...
                    *\[*STATIC*\]*
                    *\[*INCLUDE BOUND*\]*.
  ...
END-ENHANCEMENT-SECTION.

Effect

Defines a section of the source code as an [enhancement point](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_point_glosry.htm "Glossary Entry") with the ID enh\_id for a [source code enhancement](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") using a [source code plug-in](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") and assigns it to [simple enhancement spots](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry") spot1, spot2, ...

Additions

-   STATIC
    Defines a static source code enhancement.
    
-   INCLUDE BOUND
    Binds the source code enhancement to the current include program.