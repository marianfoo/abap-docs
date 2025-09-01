  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Catchable Runtime Errors](javascript:call_link\('abensystem-exceptions.htm'\)) → 

Assignment of Catchable Runtime Errors to Exception Groups

Most of the obsolete catchable runtime errors are assigned to exception groups. Using the name of an exception group, all catchable runtime errors of the group can be caught simultaneously using [CATCH SYSTEM-EXCEPTIONS](javascript:call_link\('abapcatch_sys.htm'\)).

For each of the catchable runtime errors, a [predefined exception class](javascript:call_link\('abenabap_exception_classes.htm'\)) is specified that can be used to handle the runtime error Normally, most exception classes of an exception group belong to a common superclass. This superclass is specified in parentheses below the exception group.

The associated ABAP keywords are specified for each exception group. Only those keywords associated with a specific exception group can be used to catch the runtime errors in this exception group using the obsolete statement CATCH SYSTEM-EXCEPTIONS.

Exception group: ARITHMETIC\_ERRORS

(Associated superclass: CX\_SY\_ARITHMETIC\_ERROR)

This group contains exceptions that can be raised by arithmetic expressions. These include, for example, division by zero, overflows in fields, and errors in arithmetic and trigonometric functions.
Errors cannot be caught that occur during the conversion between data types in mixed [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry")

BCD\_ZERODIVIDE

CX\_SY\_ZERODIVIDE

COMPUTE\_FLOAT\_ZERODIVIDE

CX\_SY\_ZERODIVIDE

COMPUTE\_INT\_ZERODIVIDE

CX\_SY\_ZERODIVIDE

ADDF\_INT\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

BCD\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_BCD\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_COSH\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_EXP\_RANGE

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_DIV\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_MINUS\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_PLUS\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_TIMES\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_ABS\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_DIV\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_MINUS\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_PLUS\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_TIMES\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_LOG10\_ERROR

CX\_SY\_ARITHMETIC\_OVERFLOW, CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_LOG\_ERROR

CX\_SY\_ARITHMETIC\_OVERFLOW, CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_MATH\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_POW\_RANGE

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_SINH\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_ACOS\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_ASIN\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_ATAN\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_COSH\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_COS\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_EXP\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_MATH\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_POW\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_SINH\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_SIN\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_SQRT\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_TANH\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_COS\_LOSS

CX\_SY\_PRECISION\_LOSS

COMPUTE\_MATH\_LOSS

CX\_SY\_PRECISION\_LOSS

COMPUTE\_SIN\_LOSS

CX\_SY\_PRECISION\_LOSS

COMPUTE\_TAN\_LOSS

CX\_SY\_PRECISION\_LOSS

BCD\_FIELD\_OVERFLOW

CX\_SY\_CONVERSION\_OVERFLOW

The following keywords are associated with this exception group:

[ADD](javascript:call_link\('abapadd.htm'\))

[ADD-CORRESPONDING](javascript:call_link\('abapadd-corresponding.htm'\))

[COMPUTE](javascript:call_link\('abapcompute_arith.htm'\))

[DIVIDE](javascript:call_link\('abapdivide.htm'\))

[DIVIDE-CORRESPONDING](javascript:call_link\('abapdivide-corresponding.htm'\))

[MULTIPLY](javascript:call_link\('abapmultiply.htm'\))

[MULTIPLY-CORRESPONDING](javascript:call_link\('abapmultiply-corresponding.htm'\))

[SUBTRACT](javascript:call_link\('abapsubtract.htm'\))

[SUBTRACT-CORRESPONDING](javascript:call_link\('abapsubtract-corresponding.htm'\))

Notes

The keyword [COMPUTE](javascript:call_link\('abapcompute_arith.htm'\)) is optional (and also obsolete). However, statements in category
n1 = arithexp
still belong to the keyword COMPUTE.

Statements of the category
COMPUTE n1 = n2.
are simply assignments without arithmetic function and are assigned to the keyword MOVE (in the context of catchable runtime errors). To avoid confusion, it is better to write the following in these cases:
n1 = n2.

Exception group: CONVERSION\_ERRORS

(Associated superclass: CX\_SY\_CONVERSION\_ERROR)

This group contains runtime errors that can occur during the conversion between data types. An explicit conversion can be made using [MOVE](javascript:call_link\('abapmove.htm'\)), for example.
Implicit conversions are only caught in [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry").

BCD\_FIELD\_OVERFLOW

CX\_SY\_CONVERSION\_OVERFLOW

CONVT\_OVERFLOW

CX\_SY\_CONVERSION\_OVERFLOW

CONVT\_CODEPAGE

CX\_SY\_CONVERSION\_CODEPAGE

CONVT\_NO\_NUMBER

CX\_SY\_CONVERSION\_NO\_NUMBER

BCD\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

The following keywords are associated with this exception group:

[ADD](javascript:call_link\('abapadd.htm'\))

[ADD-CORRESPONDING](javascript:call_link\('abapadd-corresponding.htm'\))

[COMPUTE](javascript:call_link\('abapcompute_arith.htm'\))

[DIVIDE](javascript:call_link\('abapdivide.htm'\))

[DIVIDE-CORRESPONDING](javascript:call_link\('abapdivide-corresponding.htm'\))

[MOVE](javascript:call_link\('abapmove.htm'\))

[MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\))

[MULTIPLY](javascript:call_link\('abapmultiply.htm'\))

[MULTIPLY-CORRESPONDING](javascript:call_link\('abapmultiply-corresponding.htm'\))

[PACK](javascript:call_link\('abappack.htm'\))

[SUBTRACT](javascript:call_link\('abapsubtract.htm'\))

[SUBTRACT-CORRESPONDING](javascript:call_link\('abapsubtract-corresponding.htm'\))

[UNPACK](javascript:call_link\('abapunpack.htm'\))

Note

Statements of category n2 = n1 are assigned to the obsolete keyword MOVE.

Exception group: CREATE\_DATA\_ERRORS

(Associated superclass: CX\_SY\_CREATE\_ERROR)

This group contains runtime errors that can occur when data objects are created.

CREATE\_DATA\_UNKNOWN\_TYPE

CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_NOT\_ALLOWED\_TYPE

CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_LEN\_NOT\_ALLOWED

CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_ILLEGAL\_LENGTH

CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_ILLEGAL\_DECIMALS

CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_ILLEGAL\_INIT\_SIZE

CX\_SY\_CREATE\_DATA\_ERROR

The following keywords are associated with this exception group:

[CREATE DATA](javascript:call_link\('abapcreate_data.htm'\))

Exception group: CREATE\_OBJECT\_ERRORS

(Associated superclass: CX\_SY\_CREATE\_ERROR)

This group contains runtime errors that can occur when objects are created.

CREATE\_OBJECT\_CLASS\_NOT\_FOUND

CX\_SY\_CREATE\_OBJECT\_ERROR

CREATE\_OBJECT\_CLASS\_ABSTRACT

CX\_SY\_CREATE\_OBJECT\_ERROR

CREATE\_OBJECT\_CREATE\_PRIVATE

CX\_SY\_CREATE\_OBJECT\_ERROR

CREATE\_OBJECT\_CREATE\_PROTECTED

CX\_SY\_CREATE\_OBJECT\_ERROR

The following keywords are associated with this exception group:

[CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\))

Exception group: DATA\_ACCESS\_ERRORS

(Associated superclass: CX\_SY\_DATA\_ACCESS\_ERROR)

This group contains runtime errors that can occur in substring accesses (with offset/length) to data objects.

DATA\_OFFSET\_NEGATIVE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_LENGTH\_NEGATIVE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_LENGTH\_0

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_LENGTH\_TOO\_LARGE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_OFFSET\_LENGTH\_TOO\_LARGE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

REFI\_WRONG\_SECTION

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_NEGATIVE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_TOO\_LARGE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_LENGTH\_NEGATIVE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_LENGTH\_TOO\_LARGE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_LENGTH\_TOO\_LARGE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_OFFSET\_LENGTH\_NOT\_ALLOWED

CX\_SY\_OFFSET\_NOT\_ALLOWED

Since substring accesses can occur in almost all statements, no keywords can be associated.

Exception group: DYNAMIC\_CALL\_METHOD\_ERRORS

(Associated superclass: CX\_SY\_DYN\_CALL\_ERROR)

This group contains runtime errors that can occur in dynamic method calls. These are normally errors that trigger a syntax error when the call is static.

DYN\_CALL\_METH\_CLASS\_ABSTRACT

CX\_SY\_DYN\_CALL\_ILLEGAL\_CLASS

DYN\_CALL\_METH\_CLASS\_NOT\_FOUND

CX\_SY\_DYN\_CALL\_ILLEGAL\_CLASS

DYN\_CALL\_METH\_CLASSCONSTRUCTOR

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_CONSTRUCTOR

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_NOT\_FOUND

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_NO\_CLASS\_METHOD

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_PRIVATE

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_PROTECTED

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_EXCP\_NOT\_FOUND

CX\_SY\_DYN\_CALL\_EXCP\_NOT\_FOUND

DYN\_CALL\_METH\_PARAM\_KIND

CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARAM\_LITL\_MOVE

CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARAM\_TAB\_TYPE

CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARAM\_TYPE

CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARAM\_MISSING

CX\_SY\_DYN\_CALL\_PARAM\_MISSING

DYN\_CALL\_METH\_PARREF\_INITIAL

CX\_SY\_DYN\_CALL\_PARAM\_MISSING

DYN\_CALL\_METH\_PARAM\_NOT\_FOUND

CX\_SY\_DYN\_CALL\_PARAM\_NOT\_FOUND

DYN\_CALL\_METH\_REF\_IS\_INITIAL

CX\_SY\_REF\_IS\_INITIAL

The following keywords are associated with this exception group:

[CALL METHOD](javascript:call_link\('abapcall_method_dynamic.htm'\))

Exception group: FILE\_ACCESS\_ERRORS

(Associated superclass: CX\_SY\_FILE\_ACCESS\_ERROR)

This group contains runtime errors that can occur when files are accessed. Typical examples are when the system cannot find the file, when no more space is available to write to or create the file, or if the authorization to access the file is missing.

DATASET\_CANT\_CLOSE

CX\_SY\_FILE\_CLOSE

DATASET\_CANT\_OPEN

CX\_SY\_FILE\_OPEN

EXPORT\_DATASET\_CANNOT\_OPEN

CX\_SY\_FILE\_OPEN

DATASET\_WRITE\_ERROR

CX\_SY\_FILE\_IO

DATASET\_READ\_ERROR

CX\_SY\_FILE\_IO

EXPORT\_DATASET\_WRITE\_ERROR

CX\_SY\_FILE\_IO

DATASET\_SEEK\_ERROR

CX\_SY\_FILE\_POSITION

DATASET\_NO\_POSITION

CX\_SY\_FILE\_POSITION

DATASET\_READ\_ONLY

CX\_SY\_FILE\_OPEN\_MODE

DATASET\_NOT\_OPEN

CX\_SY\_FILE\_OPEN\_MODE

OPEN\_DATASET\_NO\_AUTHORITY

CX\_SY\_FILE\_AUTHORITY

OPEN\_PIPE\_NO\_AUTHORITY

CX\_SY\_FILE\_AUTHORITY

DATASET\_TOO\_MANY\_FILES

CX\_SY\_TOO\_MANY\_FILES

DATASET\_NO\_PIPE

CX\_SY\_PIPES\_NOT\_SUPPORTED

The following keywords are associated with this exception group:

CLOSE, variant: [CLOSE DATASET ...](javascript:call_link\('abapclose_dataset.htm'\))

DELETE, variant: [DELETE DATASET ...](javascript:call_link\('abapdelete_dataset.htm'\))

EXPORT, variant: [EXPORT ... TO DATASET ...](javascript:call_link\('abapexport_data_cluster.htm'\))

OPEN, variant: [OPEN DATASET...](javascript:call_link\('abapopen_dataset.htm'\))

READ, variant: [READ DATASET...](javascript:call_link\('abapread_dataset.htm'\))

[TRANSFER](javascript:call_link\('abaptransfer.htm'\))

Exception group: IMPORT\_MISMATCH\_ERRORS

(Common class: CX\_SY\_IMPORT\_MISMATCH\_ERROR)

This group contains runtime errors that can occur during the import of data

-   from the ABAP Memory,

-   from the database,

-   from the SHARED BUFFER, or

-   from a file

if the type or the length of the data stored is not identical with that of the target type.

CONNE\_IMPORT\_WRONG\_COMP\_DECS

CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_COMP\_LENG

CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_COMP\_TYPE

CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_DECS

CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_LENG

CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_TYPE

CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_OBJECT\_TYPE

CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_STRUCTURE

CX\_SY\_IMPORT\_MISMATCH\_ERROR

IMPORT\_ALIGNMENT\_MISMATCH

CX\_SY\_IMPORT\_MISMATCH\_ERROR

IMPORT\_WRONG\_END\_POS

CX\_SY\_IMPORT\_MISMATCH\_ERROR

The following keywords are associated with this exception group:

[IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\))

Exception group: LOCALIZATION\_ERRORS

(Common class: CX\_SY\_LOCALIZATION\_ERROR)

This group contains runtime errors that can occur when the program switches to another [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). Typical examples are when the required locale language is not allowed or when the system wants to switch to a character set which has not been released.

TEXTENV\_CODEPAGE\_NOT\_ALLOWED

CX\_SY\_LOCALIZATION\_ERROR

TEXTENV\_INVALID

CX\_SY\_LOCALIZATION\_ERROR

TEXTENV\_KEY\_INVALID

CX\_SY\_LOCALIZATION\_ERROR

The following keywords are associated with this exception group:

SET, variant: [SET LOCALE ...](javascript:call_link\('abapset_locale.htm'\))

Exception group: REMOTE\_CALL\_ERRORS

(Associated superclass: CX\_SY\_REMOTE\_CALL\_ERROR)

This group contains runtime errors that can occur during calls to remote systems (currently only CALL METHOD). Typical examples are network errors or the unexpected termination of the connection.

RMC\_COMMUNICATION\_FAILURE

CX\_SY\_RMC\_COMM\_FAILURE

RMC\_INVALID\_STATUS

CX\_SY\_RMC\_INVALID\_STATUS

RMC\_SYSTEM\_FAILURE

CX\_SY\_RMC\_SYSTEM\_FAILURE

The following keywords are associated with this exception group:

[CALL METHOD](javascript:call_link\('abapcall_method_dynamic.htm'\))

Not assigned to an exception group:

ASSIGN\_CASTING\_ILLEGAL\_CAST

CX\_SY\_ASSIGN\_CAST\_ILLEGAL\_CAST

ASSIGN\_CASTING\_UNKNOWN\_TYPE

CX\_SY\_ASSIGN\_CAST\_UNKNOWN\_TYPE

ASSIGN\_FIELD\_NOT\_IN\_RANGE

CX\_SY\_ASSIGN\_OUT\_OF\_RANGE

DATASET\_OFFSET\_TOO\_LARGE

CX\_SY\_FILE\_POSITION

DYN\_CALL\_METH\_NOT\_IMPLEMENTED

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

EXPORT\_BUFFER\_NO\_MEMORY

CX\_SY\_EXPORT\_BUFFER\_NO\_MEMORY

GENERATE\_SUBPOOL\_DIR\_FULL

CX\_SY\_GENERATE\_SUBPOOL\_FULL

MOVE\_CAST\_ERROR

CX\_SY\_MOVE\_CAST\_ERROR

PERFORM\_PROGRAM\_NAME\_TOO\_LONG

CX\_SY\_PROGRAM\_NOT\_FOUND

REPLACE\_INFINITE\_LOOP

CX\_SY\_REPLACE\_INFINITE\_LOOP