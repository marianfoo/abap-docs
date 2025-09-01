---
title: "ENHANCEMENT-POINT - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapenhancement-point.htm) Syntax ENHANCEMENT-POINT enh_id SPOTS spot1 spot2 ... STATIC INCLUDE BOUND. Effect Defines a point in the source code as an enhancement point(https://help.sap.com/doc/abapdocu_756_ind
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapenhancement-point_shortref.htm"
abapFile: "abapenhancement-point_shortref.htm"
keywords: ["do", "try", "abapenhancement", "point", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  E

ENHANCEMENT-POINT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapenhancement-point.htm)

Syntax

ENHANCEMENT-POINT enh\_id SPOTS spot1 spot2 ...
                  *\[*STATIC*\]*
                  *\[*INCLUDE BOUND*\]*.

Effect

Defines a point in the source code as an [enhancement point](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_point_glosry.htm "Glossary Entry") with the ID enh\_id for a [source code enhancement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") using [source code plug-ins](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") and assigns [simple enhancement spots](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry") spot1, spot2, ... to it.

Effect

Defines a [source code enhancement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") as an [enhancement spot element definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_spot_def_glosry.htm "Glossary Entry") with the ID enh\_id, and assigns [simple enhancement spots](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry") spot1, spot2, ... to it.

Additions

-   STATIC
    Defines a static source code enhancement.
-   INCLUDE BOUND
    Binds the source code enhancement to the current include program.