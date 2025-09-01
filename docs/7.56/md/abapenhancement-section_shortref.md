  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  E

ENHANCEMENT-SECTION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapenhancement-section.htm)

Syntax

ENHANCEMENT-SECTION enh\_id SPOTS spot1 spot2 ...
                    *\[*STATIC*\]*
                    *\[*INCLUDE BOUND*\]*.
  ...
END-ENHANCEMENT-SECTION.

Effect

Defines a section of the source code as an [enhancement point](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_point_glosry.htm "Glossary Entry") with the ID enh\_id for a [source code enhancement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") using a [source code plug-in](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") and assigns it to [simple enhancement spots](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry") spot1, spot2, ...

Additions

-   STATIC
    Defines a static source code enhancement.
-   INCLUDE BOUND
    Binds the source code enhancement to the current include program.