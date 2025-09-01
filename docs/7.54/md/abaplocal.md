---
title: "LOCAL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplocal_shortref.htm) Obsolete Syntax LOCAL dobj. Effect The statement LOCAL (not allowed in classes) saves the current content of a data object dobj in an internal buffer. It can be used only in subroutines(https://hel
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplocal.htm"
abapFile: "abaplocal.htm"
keywords: ["loop", "do", "if", "try", "class", "data", "internal-table", "field-symbol", "abaplocal"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_modularization.htm) →  [Temporary Storage of Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlocal_obsolete.htm) → 

LOCAL

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplocal_shortref.htm)

Obsolete Syntax

LOCAL dobj.

Effect

The statement LOCAL (not allowed in classes) saves the current content of a data object dobj in an internal buffer. It can be used only in [subroutines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubroutine_glosry.htm "Glossary Entry") or [function modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_module_glosry.htm "Glossary Entry"). At the end of the procedure, the data object dobj is reassigned to the value in the buffer. If LOCAL is executed in a procedure for a data object more than once, all executions are ignored except the first one.

All data objects possible in [writer positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_data_objects.htm) can be specified for dobj. If dobj is an internal table, the procedure should not be called within a [LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm) loop that processes the table.

Modifiable formal parameters of the procedure, field symbols, or dereferenced data references are also possible after LOCAL. If formal parameters are specified, the assigned actual parameter is set to the value in the buffer at the end of the procedure. For field symbols, the field reference and the content of the referenced fields are saved.

Note

The statement LOCAL is used, in particular, to protect global variables of the [master program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenframe_program_glosry.htm "Glossary Entry") declared with [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata.htm) from unwanted changes during a procedure. Instead of using LOCAL, the global data of the master program should not be accessed in procedures.

Example

When the following program section is executed, the value of the global variable text is buffered twice, once by specifying the name in subr1 and a second time in subr2 by specifying the formal parameter para, to which text is passed by reference. After returning from subr2, text once again has the value that is set in subr1, and after returning from subr1, text assumes the value set in the framework program.

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