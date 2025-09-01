  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  C

CREATE OBJECT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object.htm)

Syntax

CREATE OBJECT oref *\[*AREA HANDLE handle*\]*
                   *\[* *\[*TYPE class*\]*
                      *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
                      *\[*EXCEPTIONS exc1 = n1 exc2 = n2 ... *\[*OTHERS = n\_others*\]**\]* *\]*
                 *|* *\[* TYPE (name)
                     *{* *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
                      *\[*EXCEPTIONS exc1 = n1 exc2 = n2 ... *\[*OTHERS = n\_others*\]**\]**}*
                   *|* *{**\[*PARAMETER-TABLE ptab*\]*
                      *\[*EXCEPTION-TABLE etab*\]**}* *\]*.

Effect

Creates an instance of a class and sets the object reference in oref to the object. If the addition TYPE is not specified, oref must be typed with reference to a [concrete](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconcrete_glosry.htm "Glossary Entry") class and this class is instantiated.

Additions

-   [AREA HANDLE handle](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_area_handle.htm)
    Creates a [shared object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshared_object_glosry.htm "Glossary Entry"), where a reference to an [area handle](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarea_handle_glosry.htm "Glossary Entry") has to be specified in handle.
-   [*{*TYPE class*}**|**{*TYPE (name)*}*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_explicit.htm)
    Statically or dynamically specifies the class of the object that must be more specific than the static type of oref.
-   [EXPORTING p1 = a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_parameters.htm)
    Passes actual parameters a1, a2, ... to input parameters p1, p2, ... of the instance constructor.
-   [EXCEPTIONS exc1 = n1 exc2 = n2 ... *\[*OTHERS = n\_others*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_parameters.htm)
    Assigns return codes to non-class-based exceptions of the instance constructor.
-   [PARAMETER-TABLE ptab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_para_tables.htm)
    Assigns dynamic actual parameters to the formal parameters of the instance constructor using an internal table ptab of type abap\_parmbind\_tab.
-   [EXCEPTION-TABLE etab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_para_tables.htm)
    Assigns dynamic return codes to non-class-based exceptions using an internal table etab of type abap\_excpbind\_tab.