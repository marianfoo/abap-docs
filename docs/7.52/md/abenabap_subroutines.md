  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_modularization.htm) → 

Subroutines

Before the introduction of ABAP Objects, subroutines were mainly used for the local modularization of programs, however, they can also be called externally. Their functions are implemented between the statements [FORM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapform.htm) and [ENDFORM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapendform.htm). A subroutine is declared immediately when implemented.

Subroutines should no longer be created in new programs for the following reasons:

-   The parameter interface has clear weaknesses when compared with the parameter interface of methods, such as:

-   Positional parameters instead of keyword parameters

-   No genuine input parameters in pass by reference

-   Typing is optional

-   No optional parameters

-   Every subroutine belongs implicitly to the public interface of its program, which is generally not wanted.

-   Calling subroutines externally is critical with respect to the assignment of the container program to a [program group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_group_glosry.htm "Glossary Entry") in the [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry"). This assignment cannot generally be defined statically.

In those places where subroutines cannot yet be replaced by methods ([PERFORM ON COMMIT*|*ROLLBACK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_subr.htm), [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgenerate_subroutine_pool.htm)), they should be used purely as wrappers for method calls and must not contain any other functional code.

Note

The syntax allows the definition of a subroutine to be split between a declaration part and an implementation part using the statements [FORM ... DEFINITION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapform_definition.htm) and [FORM ... IMPLEMENTATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapform_definition.htm), but this is not supported by all tools and should be avoided.

Continue
[FORM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapform.htm)
[ENDFORM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapendform.htm)
[FORM - DEFINITION, IMPLEMENTATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapform_definition.htm)