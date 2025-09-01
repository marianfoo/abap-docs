  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  E

ENHANCEMENT-POINT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapenhancement-point.htm)

Syntax

ENHANCEMENT-POINT enh\_id SPOTS spot1 spot2 ...
                  *\[*STATIC*\]*
                  *\[*INCLUDE BOUND*\]*.

Effect

Defines a point in the source code as an [enhancement point](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenhancement_point_glosry.htm "Glossary Entry") with the ID enh\_id for a [source code enhancement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") using [source code plug-ins](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") and assigns [simple enhancement spots](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry") spot1, spot2, ... to it.

Effect

Defines a [source code enhancement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") as an [enhancement spot element definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenhancement_spot_def_glosry.htm "Glossary Entry") with the ID enh\_id, and assigns [simple enhancement spots](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry") spot1, spot2, ... to it.

Additions

-   STATIC
    Defines a static source code enhancement.
    
-   INCLUDE BOUND
    Binds the source code enhancement to the current include program.