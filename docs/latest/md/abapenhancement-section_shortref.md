  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  E

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ENHANCEMENT-SECTION%2C%20ABAPENHANCEMENT-SECTION_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ENHANCEMENT-SECTION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapenhancement-section.htm)

Syntax

ENHANCEMENT-SECTION enh\_id SPOTS spot1 spot2 ...
                    *\[*STATIC*\]*
                    *\[*INCLUDE BOUND*\]*.
  ...
END-ENHANCEMENT-SECTION.

Effect

Defines a section of the source code as an [enhancement point](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenhancement_point_glosry.htm "Glossary Entry") with the ID enh\_id for a [source code enhancement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") using a [source code plug-in](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") and assigns it to [simple enhancement spots](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry") spot1, spot2, ...

Additions   

-   STATIC
    Defines a static source code enhancement.
-   INCLUDE BOUND
    Binds the source code enhancement to the current include program.