  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Modularization](javascript:call_link\('abenobsolete_modularization.htm'\)) → 

Subroutines

Before the introduction of ABAP Objects, subroutines were mainly used for the local modularization of programs, however, they can also be called externally. Their functions are implemented between the statements [FORM](javascript:call_link\('abapform.htm'\)) and [ENDFORM](javascript:call_link\('abapendform.htm'\)). A subroutine is declared immediately when implemented.

Subroutines should no longer be created in new programs for the following reasons:

-   The parameter interface has clear weaknesses when compared with the parameter interface of methods, such as:

-   Positional parameters instead of keyword parameters

-   No genuine input parameters in pass by reference

-   Typing is optional

-   No optional parameters

-   Every subroutine belongs implicitly to the public interface of its program, which is generally not wanted.

-   Calling subroutines externally is critical with respect to the assignment of the container program to a [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). This assignment cannot generally be defined statically.

In those places where subroutines cannot yet be replaced by methods ([PERFORM ON COMMIT*|*ROLLBACK](javascript:call_link\('abapperform_subr.htm'\)), [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\))), they should be used purely as wrappers for method calls and must not contain any other functional code.

Note

The syntax allows the definition of a subroutine to be split between a declaration part and an implementation part using the statements [FORM ... DEFINITION](javascript:call_link\('abapform_definition.htm'\)) and [FORM ... IMPLEMENTATION](javascript:call_link\('abapform_definition.htm'\)), but this is not supported by all tools and should be avoided.

Continue
[FORM](javascript:call_link\('abapform.htm'\))
[ENDFORM](javascript:call_link\('abapendform.htm'\))
[FORM - DEFINITION, IMPLEMENTATION](javascript:call_link\('abapform_definition.htm'\))