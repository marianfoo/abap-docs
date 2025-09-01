---
title: "ENHANCEMENT-POINT - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapenhancement-point.htm) Syntax ENHANCEMENT-POINT enh_id SPOTS spot1 spot2 ... STATIC INCLUDE BOUND. Effect Defines a point in the source code as an enhancement point(https://help.sap.com/doc/abapdocu_la
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapenhancement-point_shortref.htm"
abapFile: "abapenhancement-point_shortref.htm"
keywords: ["do", "if", "try", "abapenhancement", "point", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  E

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ENHANCEMENT-POINT%2C%20ABAPENHANCEMENT-POINT_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ENHANCEMENT-POINT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapenhancement-point.htm)

Syntax

ENHANCEMENT-POINT enh\_id SPOTS spot1 spot2 ...
                  *\[*STATIC*\]*
                  *\[*INCLUDE BOUND*\]*.

Effect

Defines a point in the source code as an [enhancement point](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenhancement_point_glosry.htm "Glossary Entry") with the ID enh\_id for a [source code enhancement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") using [source code plug-ins](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") and assigns [simple enhancement spots](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry") spot1, spot2, ... to it.

Effect

Defines a [source code enhancement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") as an [enhancement spot element definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenhancement_spot_def_glosry.htm "Glossary Entry") with the ID enh\_id, and assigns [simple enhancement spots](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry") spot1, spot2, ... to it.

Additions   

-   STATIC
    Defines a static source code enhancement.
-   INCLUDE BOUND
    Binds the source code enhancement to the current include program.