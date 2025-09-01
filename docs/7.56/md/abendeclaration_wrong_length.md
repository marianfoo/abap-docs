  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_data_obsolete.htm'\)) → 

Unnecessary Length Specifications

Obsolete Syntax

... dtype(len)*|*dobj(len) TYPE d*|*f*|*i*|*t ...

Effect

Length specifications in [declarations](javascript:call_link\('abenabap_declarations.htm'\)) using the statements TYPES, DATA, STATICS, and CONSTANTS and the built-in ABAP types d, f, i, and t are ignored. Only the predefined [fixed lengths](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) can be specified. Lengths specified in this way produce syntax errors in classes and interfaces and syntax warnings elsewhere.

Hint

This obsolete length specification is only possible with the obsolete parenthesis syntax and not with the recommended addition LENGTH.

Bad Example

DATA: f1(8) TYPE d,
      f2(4) TYPE i.

Good Example

DATA: f1 TYPE d,
      f2 TYPE i.