# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Modularization / Temporary Storage of Data

Included pages: 2


### abenlocal_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobsolete_modularization.htm) → 

Temporary Storage of Data

-   [LOCAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplocal.htm)

Continue
[LOCAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplocal.htm)


### abaplocal.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobsolete_modularization.htm) →  [Temporary Storage of Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocal_obsolete.htm) → 

LOCAL

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplocal_shortref.htm)

Obsolete Syntax

LOCAL dobj.

Effect

The statement LOCAL, which is forbidden in classes, saves the current content of a data object dobj in an internal buffer. It can be used only in [subroutines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubroutine_glosry.htm "Glossary Entry") or [function modules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_module_glosry.htm "Glossary Entry"). At the end of the procedure, the data object dobj is reassigned the value in the buffer. If LOCAL is executed in a procedure for a data object more than once, all executions are ignored except the first one.

All data objects possible in [write positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands_data_objects.htm) can be specified for dobj. If dobj is an internal table, the procedure must not be called within a [LOOP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab.htm) loop across the table.

Modifiable formal parameters of the procedure, field symbols, or dereferenced data references are also possible after LOCAL. If formal parameters are specified, the assigned actual parameter is set to the value in the buffer at the end of the procedure. For field symbols, the field reference and the content of the referenced fields are saved.

Hint

The statement LOCAL is used, in particular, to protect global variables of the [compilation unit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencompilation_unit_glosry.htm "Glossary Entry") declared with [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata.htm) from unwanted changes during a procedure. Instead of using LOCAL, the global data of the compilation unit should not be accessed in procedures.

Example

When the following program section is executed, the value of the global variable text is buffered twice, once by specifying the name in subr1 and a second time in subr2 by specifying the formal parameter para, to which text is passed by reference. After returning from subr2, text has the value that is set in subr1 again, and after returning from subr1, text has the value set in the compilation unit.

DATA text TYPE string VALUE 'Global text'.
cl\_demo\_output=>write\_text( text ).
PERFORM subr1.
cl\_demo\_output=>display\_text( text ).
FORM subr1.
  LOCAL text.
  text = 'Text in subr1'.
  cl\_demo\_output=>write\_text( text ).
  PERFORM subr2 USING text.
  cl\_demo\_output=>write\_text( text ).
ENDFORM.
FORM subr2 USING para TYPE string.
  LOCAL para.
  para = 'Text in subr2'.
  cl\_demo\_output=>write\_text( text ).
ENDFORM.
