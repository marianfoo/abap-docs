  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  E

ENHANCEMENT-POINT - Quick reference

[Reference](javascript:call_link\('abapenhancement-point.htm'\))

Syntax

ENHANCEMENT-POINT enh\_id SPOTS spot1 spot2 ...
                  *\[*STATIC*\]*
                  *\[*INCLUDE BOUND*\]*.

Effect

Defines a point in the source code as an [enhancement point](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") with the ID enh\_id for a [source code enhancement](javascript:call_link\('abensource_code_enhancement_glosry.htm'\) "Glossary Entry") using [source code plug-ins](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") and assigns [simple enhancement spots](javascript:call_link\('abensimple_enhancement_spot_glosry.htm'\) "Glossary Entry") spot1, spot2, ... to it.

Effect

Defines a [source code enhancement](javascript:call_link\('abensource_code_enhancement_glosry.htm'\) "Glossary Entry") as an [enhancement spot element definition](javascript:call_link\('abenenhancement_spot_def_glosry.htm'\) "Glossary Entry") with the ID enh\_id, and assigns [simple enhancement spots](javascript:call_link\('abensimple_enhancement_spot_glosry.htm'\) "Glossary Entry") spot1, spot2, ... to it.

Additions

-   STATIC
    Defines a static source code enhancement.
    
-   INCLUDE BOUND
    Binds the source code enhancement to the current include program.