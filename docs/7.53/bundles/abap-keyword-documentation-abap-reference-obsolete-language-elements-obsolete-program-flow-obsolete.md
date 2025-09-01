# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Program Flow / Obsolete Catchable Runtime Errors

Included pages: 6


### abensystem-exceptions.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) → 

Obsolete Catchable Runtime Errors

Before class-based exceptions were introduced, exceptions for exception situations of the runtime environment that could be successfully handled in the program were defined exclusively as catchable runtime errors and could be handled using the statement CATCH SYSTEM-EXCEPTIONS.

All catchable runtime errors were predefined in the system and assigned to the ABAP statements where they could occur. It was possible to group multiple runtime errors together in an exception group and handle them together under the name of the group.

With the introduction of class-based exceptions, an exception class is assigned to each catchable runtime error. The error can still be handled as a catchable runtime error, but should be handled as a class-based exception instead.

Catchable runtime errors cannot be triggered explicitly; they are only triggered implicitly by the runtime environment.

-   [Alphabetical Overview of Catchable Runtime Errors](javascript:call_link\('abenueb-abfb-sysexc.htm'\))

-   [Assignment of Catchable Runtime Errors to Exception Groups](javascript:call_link\('abensysexc-errkl.htm'\))

-   [Handling Catchable Runtime Errors](javascript:call_link\('abapcatch_sys.htm'\))

Continue
[Alphabetical Overview of Catchable Runtime Errors](javascript:call_link\('abenueb-abfb-sysexc.htm'\))
[Assignment of Catchable Runtime Errors to Exception Groups](javascript:call_link\('abensysexc-errkl.htm'\))
[CATCH SYSTEM-EXCEPTIONS](javascript:call_link\('abapcatch_sys.htm'\))


### abenueb-abfb-sysexc.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Catchable Runtime Errors](javascript:call_link\('abensystem-exceptions.htm'\)) → 

Alphabetical Overview of Catchable Runtime Errors

The following is an alphabetical list of the obsolete catchable runtime errors. For each catchable runtime error, the associated [predefined exception class](javascript:call_link\('abenabap_exception_classes.htm'\)) used to handle the corresponding runtime error is specified. If an exception class is assigned to more than one catchable runtime error, it may contain as many message texts as required. These can be found in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") on the Texts tab.

Almost all the runtime errors listed here are organized together in [exception groups](javascript:call_link\('abenexception_group_glosry.htm'\) "Glossary Entry"). These exception groups are also assigned those ABAP keywords for which the runtime errors can be caught.

ASSIGN\_CASTING\_ILLEGAL\_CAST

The components of the source field type and the target type that are strings, tables, or references do not have exactly the same offset and type.

Exception class: CX\_SY\_ASSIGN\_CAST\_ILLEGAL\_CAST

ASSIGN\_CASTING\_UNKNOWN\_TYPE

The type specified at runtime is unknown.

Exception class: CX\_SY\_ASSIGN\_CAST\_UNKNOWN\_TYPE

ASSIGN\_FIELD\_NOT\_IN\_RANGE

The field is not within the RANGE specified.

Exception class: CX\_SY\_ASSIGN\_OUT\_OF\_RANGE

BCD\_FIELD\_OVERFLOW

Overflow after conversion/arithmetic operation (type p, with specified length)

Exception class: CX\_SY\_CONVERSION\_OVERFLOW

BCD\_OVERFLOW

Overflow after conversion/arithmetic operation (type p)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

BCD\_ZERODIVIDE

Division by 0 (type p)

Exception class: CX\_SY\_ZERODIVIDE

COMPUTE\_ACOS\_DOMAIN

Invalid call of the numeric function acos

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_ASIN\_DOMAIN

Invalid call of the numeric function asin

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_BCD\_OVERFLOW

Overflow after arithmetic operation (all operands of type p)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_COSH\_OVERFLOW

Overflow after the numeric function cosh

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_COS\_DOMAIN

Invalid call of the numeric function cosh

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_COS\_LOSS

Result of the function cos is not precise

Exception class: CX\_SY\_PRECISION\_LOSS

COMPUTE\_EXP\_RANGE

Overflow after the numeric function exp

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_DIV\_OVERFLOW

Overflow after division (type f)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_MINUS\_OVERFLOW

Overflow after subtraction (type f)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_PLUS\_OVERFLOW

Overflow after addition (type f)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_TIMES\_OVERFLOW

Overflow after multiplication (type f)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_ZERODIVIDE

Division by zero (type f)

Exception class: CX\_SY\_ZERODIVIDE

COMPUTE\_INT\_ABS\_OVERFLOW

Integer overflow after calculation of absolute value

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_DIV\_OVERFLOW

Integer overflow after division

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_MINUS\_OVERFLOW

Integer overflow after subtraction

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_PLUS\_OVERFLOW

Integer overflow after addition

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_TIMES\_OVERFLOW

Integer overflow after multiplication

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_ZERODIVIDE

Division by 0 (type I)

Exception class: CX\_SY\_ZERODIVIDE

COMPUTE\_LOG10\_ERROR

Invalid call of the numeric function log10

Exception classes: CX\_SY\_ARITHMETIC\_OVERFLOW, CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_LOG\_ERROR

Invalid call of the numeric function log

Exception classes: CX\_SY\_ARITHMETIC\_OVERFLOW, CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_POW\_DOMAIN

Invalid argument after power operation

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_POW\_RANGE

Overflow after power operation

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_SINH\_OVERFLOW

Overflow after the numeric function sinh

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_SIN\_DOMAIN

Invalid call of the numeric function sin

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_SIN\_LOSS

Result of the function sin is not precise

Exception class: CX\_SY\_PRECISION\_LOSS

COMPUTE\_SQRT\_DOMAIN

Invalid call of the numeric function sqrt

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_TAN\_DOMAIN

Invalid call of the numeric function tan

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_TAN\_LOSS

Result of the function tan is not precise

Exception class: CX\_SY\_PRECISION\_LOSS

CONNE\_IMPORT\_WRONG\_COMP\_DECS

Import error; a component of a structured type in the data has incorrect [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry")

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_COMP\_LENG

Import error; a component of a structured type in the data has an incorrect length

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_COMP\_TYPE

Import error; a component of a structured type in the data has an incorrect type

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_DECS

Import error; a field type in the data has incorrect [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry")

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_LENG

Import error; a field in the data has an incorrect length

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_TYPE

Import error; a field in the data has an incorrect type

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_OBJECT\_TYPE

Import error; type conflict between simple and structured data types

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_STRUCTURE

Import error; type conflict between structured objects

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONVT\_CODEPAGE

Character set conversion not possible for one or more characters

Exception class: CX\_SY\_CONVERSION\_CODEPAGE

CONVT\_CODEPAGE\_INIT

Conversion of texts from [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") to code page not supported

Exception class: CX\_SY\_CODEPAGE\_CONVERTER\_INIT

CONVT\_NO\_NUMBER

Value to be converted cannot be interpreted as a number

Exception class: CX\_SY\_CONVERSION\_NO\_NUMBER

CONVT\_OVERFLOW

Overflow after conversion (all types, not type p)

Exception class: CX\_SY\_CONVERSION\_OVERFLOW

CREATE\_DATA\_ILLEGAL\_DECIMALS

Invalid value for the addition DECIMALS

Exception class: CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_ILLEGAL\_INIT\_SIZE

Invalid value for the addition INITIAL SIZE

Exception class: CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_ILLEGAL\_LENGTH

Invalid value for the addition LENGTH

Exception class: CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_LEN\_NOT\_ALLOWED

The addition LENGTH was used for a type other than c, n, x, or p.

Exception class: CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_NOT\_ALLOWED\_TYPE

The type specified dynamically in the addition TYPE is not fully typed

Exception class: CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_UNKNOWN\_TYPE

The type specified in the addition TYPE is unknown

Exception class: CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_OBJECT\_CLASS\_ABSTRACT

An attempt was made to instantiate an abstract class.

Exception class: CX\_SY\_CREATE\_OBJECT\_ERROR

CREATE\_OBJECT\_CLASS\_NOT\_FOUND

The class specified by the dynamic CREATE OBJECT was not found.

Exception class: CX\_SY\_CREATE\_OBJECT\_ERROR

CREATE\_OBJECT\_CREATE\_PRIVATE

An attempt was made to create an object of a class defined as 'CREATE PRIVATE'.

Exception class: CX\_SY\_CREATE\_OBJECT\_ERROR

CREATE\_OBJECT\_CREATE\_PROTECTED

An attempt was made to create an object of a class defined as 'CREATE PROTECTED'.

Exception class: CX\_SY\_CREATE\_OBJECT\_ERROR

DATA\_LENGTH\_NEGATIVE

Invalid substring access: Length negative

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_LENGTH\_0

Invalid substring access: Length 0

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_LENGTH\_TOO\_LARGE

Invalid substring access: Length too long

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_OFFSET\_NEGATIVE

Invalid substring access: Offset negative

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_OFFSET\_LENGTH\_TOO\_LARGE

Invalid substring access: Offset plus length too long

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_OFFSET\_LENGTH\_NOT\_ALLOWED

Invalid substring access: Invalid type

Exception class: CX\_SY\_OFFSET\_NOT\_ALLOWED

DATASET\_CANT\_CLOSE

File could not be closed; there may be no more space in the file system

Exception class: CX\_SY\_FILE\_CLOSE

DATASET\_CANT\_OPEN

File cannot be opened

Exception class: CX\_SY\_FILE\_OPEN

DATASET\_NO\_PIPE

OPEN DATASET with the addition FILTER not supported on the current operating system.

Exception class: CX\_SY\_PIPES\_NOT\_SUPPORTED

DATASET\_NO\_POSITION

No access possible to current read/write position in the file

Exception class: CX\_SY\_FILE\_POSITION

DATASET\_NOT\_OPEN

File not open.

Exception class: CX\_SY\_FILE\_OPEN\_MODE

DATASET\_OFFSET\_TOO\_LARGE

Specified offset exceeds system limit

Exception class: CX\_SY\_FILE\_POSITION

DATASET\_PIPE\_CLOSED

Pipe for file closed.

Exception class: CX\_SY\_PIPE\_REOPEN

DATASET\_READ\_ERROR

File read error

Exception class: CX\_SY\_FILE\_IO

DATASET\_READ\_ONLY

File open for reading only

Exception class: CX\_SY\_FILE\_OPEN\_MODE

DATASET\_SEEK\_ERROR

Error when positioning in file

Exception class: CX\_SY\_FILE\_POSITION

DATASET\_TOO\_MANY\_FILES

Maximum number of open files exceeded

Exception class: CX\_SY\_TOO\_MANY\_FILES

DATASET\_WRITE\_ERROR

File write error

Exception class: CX\_SY\_FILE\_IO

DYN\_CALL\_METH\_CLASSCONSTRUCTOR

An attempt was made to call the class constructor.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_CLASS\_NOT\_FOUND

An attempt was made to call a method from a nonexistent class.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_CLASS

DYN\_CALL\_METH\_CONSTRUCTOR

An attempt was made to call the instance constructor.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_EXCP\_NOT\_FOUND

An attempt was made to catch an unknown exception.

Exception class: CX\_SY\_DYN\_CALL\_EXCP\_NOT\_FOUND

DYN\_CALL\_METH\_NOT\_FOUND

An attempt was made to call an unknown method.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_NOT\_IMPLEMENTED

An attempt was made to call an unimplemented method.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_NO\_CLASS\_METHOD

An attempt was made to call an instance method from a class.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_PARAM\_KIND

An attempt was made to pass a parameter with an incorrect parameter category.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARAM\_LITL\_MOVE

An attempt was made to pass a constant actual parameter to a formal EXPORTING, CHANGING, or RETURNING parameter.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARAM\_MISSING

A mandatory parameter was not filled.

Exception class: CX\_SY\_DYN\_CALL\_PARAM\_MISSING

DYN\_CALL\_METH\_PARAM\_NOT\_FOUND

An attempt was made to pass an unknown parameter.

Exception class: CX\_SY\_DYN\_CALL\_PARAM\_NOT\_FOUND

DYN\_CALL\_METH\_PARAM\_TAB\_TYPE

An attempt was made to pass a parameter with an incorrect table type.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARAM\_TYPE

An attempt was made to pass a parameter with an incorrect type.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARREF\_INITIAL

An initial data reference was passed for a mandatory parameter.

Exception class: CX\_SY\_DYN\_CALL\_PARAM\_MISSING

DYN\_CALL\_METH\_PRIVATE

An attempt was made to call a private method externally.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_PROTECTED

An attempt was made to call a [protected](javascript:call_link\('abenprotected_glosry.htm'\) "Glossary Entry") method externally.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_REF\_IS\_INITIAL

An attempt was made to call a method on an initial reference.

Exception class: CX\_SY\_REF\_IS\_INITIAL

EXPORT\_BUFFER\_NO\_MEMORY

The EXPORT [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") is too big for the application buffer.

Exception class: CX\_SY\_EXPORT\_BUFFER\_NO\_MEMORY

EXPORT\_DATASET\_CANNOT\_OPEN

The IMPORT/EXPORT statement could not open the file.

Exception class: CX\_SY\_FILE\_OPEN

EXPORT\_DATASET\_WRITE\_ERROR

The export statement could not write to the file.

Exception class: CX\_SY\_FILE\_IO

GENERATE\_SUBPOOL\_DIR\_FULL

No further temporary [subroutine pools](javascript:call_link\('abensubroutine_pool_glosry.htm'\) "Glossary Entry") can be generated.

Exception class: CX\_SY\_GENERATE\_SUBPOOL\_FULL

IMPORT\_ALIGNMENT\_MISMATCH

Import error; same sequence of components but type conflicts exist or mismatches with structured data types

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

IMPORT\_WRONG\_END\_POS

Import error; dataset has a different length.

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

MOVE\_CAST\_ERROR

Type conflict in assignment between reference variables (only operator ?= or obsolete statement MOVE...?TO... )

Exception class: CX\_SY\_MOVE\_CAST\_ERROR

OPEN\_DATASET\_NO\_AUTHORITY

No authorization for accessing file

Exception class: CX\_SY\_FILE\_AUTHORITY

OPEN\_PIPE\_NO\_AUTHORITY

No authorization for access to file (OPEN DATASET...FILTER...)

Exception class: CX\_SY\_FILE\_AUTHORITY

PERFORM\_PROGRAM\_NAME\_TOO\_LONG

Invalid program name in the PERFORM statement

Exception class: CX\_SY\_PROGRAM\_NOT\_FOUND

REFI\_WRONG\_SECTION

Incorrect offset/length specified in the REPLACE statement

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

REPLACE\_INFINITE\_LOOP

SECTION with length 0 in the REPLACE statement

Exception class: CX\_SY\_REPLACE\_INFINITE\_LOOP

RMC\_COMMUNICATION\_FAILURE

Communication error in remote method call

Exception class: CX\_SY\_RMC\_COMM\_FAILURE

RMC\_INVALID\_STATUS

State error in remote method call

Exception class: CX\_SY\_RMC\_INVALID\_STATUS

RMC\_SYSTEM\_FAILURE

System error in remote method call

Exception class: CX\_SY\_RMC\_SYSTEM\_FAILURE

STRING\_LENGTH\_NEGATIVE

Invalid access with negative length to a string

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_LENGTH\_TOO\_LARGE

Invalid access to a string (length too long)

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_NEGATIVE

Invalid access negative offset to a string

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_TOO\_LARGE

Invalid access to a string (offset too large)

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_LENGTH\_TOO\_LARGE

Invalid offset to a string (offset plus length too large)

Exception class: CX\_SY\_LOCALIZATION\_ERROR

TEXTENV\_INVALID

Error in configuration of the [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry") (SET LOCALE...)

Exception class: CX\_SY\_LOCALIZATION\_ERROR


### abensysexc-errkl.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Catchable Runtime Errors](javascript:call_link\('abensystem-exceptions.htm'\)) → 

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

-   The keyword [COMPUTE](javascript:call_link\('abapcompute_arith.htm'\)) is optional (and also obsolete). However, statements in category
    n1 = arithexp
    still belong to the keyword COMPUTE.

-   Statements of the category
    COMPUTE n1 = n2.
    are simply assignments without arithmetic function and are assigned to the keyword MOVE (in the context of catchable runtime errors). To avoid confusion, it is better to write the following in these cases:
    n1 = n2.
    

Exception group: CONVERSION\_ERRORS

(Associated superclass: CX\_SY\_CONVERSION\_ERROR)

This group contains runtime errors that can occur during the conversion between data types. An explicit conversion can be made using an [assignment](javascript:call_link\('abapmove.htm'\)), for example.
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


### abapcatch_sys.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Catchable Runtime Errors](javascript:call_link\('abensystem-exceptions.htm'\)) → 

CATCH SYSTEM-EXCEPTIONS

[Quick Reference](javascript:call_link\('abapcatch_system-except_shortref.htm'\))

Obsolete Syntax

CATCH SYSTEM-EXCEPTIONS *\[*exc1 = n1 exc2 = n2...*\]*
                        *\[*OTHERS = n\_others*\]*.
  *\[*statement\_block*\]*
ENDCATCH.

Effect

Handling [Catchable Runtime Errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry"). The statement CATCH SYSTEM-EXCEPTIONS introduces a control structure containing a statement block statement\_block that is always processed. In the list exc1 = n1 exc2 = n2 ..., [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry") and [exception groups](javascript:call_link\('abenexception_group_glosry.htm'\) "Glossary Entry") can be specified in any order. A directly specified number n1 n2 ... must be assigned to each of them.

The OTHERS addition can be executed independently or after the list exc1 = n1 exc2 = n2 .... Its effect is the same as specifying an exception group that includes all catchable runtime errors of the runtime environment.

The system handles the CATCH control structure as follows:

-   If one of the specified catchable runtime errors or a catchable runtime error contained in the specified exception groups occurs, the execution of the statement block is immediately terminated, the program continues after the statement ENDCATCH, and the number n1 n2 ... assigned to the catchable runtime error or the exception group, is stored for evaluation in the system field sy-subrc. If the list contains a catchable runtime error and its exception group or if a catchable runtime error occurs in some of the specified exception groups, sy-subrc contains the assigned number of the first position in the list.
    
-   If a catchable runtime error that is not specified in the statement CATCH SYSTEM-EXCEPTIONS or is not contained in one of the specified exception groups occurs in the statement block, the program terminates with a [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry")
    
-   If the end of the statement block is reached and no runtime error occurs, sy-subrc is set to 0.
    

A CATCH control structure cannot be defined in the same [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry"), in which the class-based exceptions are handled in a [TRY](javascript:call_link\('abaptry.htm'\)) control structure or are raised by the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or by the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)).

Notes

-   Catchable runtime errors are not passed from called [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") to the caller. They can only be caught within a processing block. Within a processing block, catchable runtime errors are caught in control structures that can be nested in any depth. If multiple CATCH control structures are nested, the system branches behind the ENDCATCH statement of the inner CATCH control structure that handles the runtime error.
    
-   The handling of catchable runtime errors using CATCH SYSTEM-EXCEPTIONS is obsolete and should be replaced by a [TRY](javascript:call_link\('abaptry.htm'\)) control structure. Since class-based exceptions are assigned to all catchable runtime errors, this is possible without restriction. The class-based exceptions can also be passed from a procedure using RAISING, as well as by using TRY.
    

Example

Catches all possible catchable runtime errors in a statement block. Catchable runtime errors of the exception group ARITHMETIC\_ERRORS set sy-subrc to 4, all other catchable runtime errors set sy-subrc to 8. The division by 0 causes the catchable runtime error COMPUTE\_INT\_ZERODIVIDE, which is contained in the exception group ARITHMETIC\_ERRORS. In this case, sy-subrc is also set to 4.

DATA: result TYPE i,
      number TYPE i.
CATCH SYSTEM-EXCEPTIONS arithmetic\_errors = 4
                        OTHERS = 8.
  ...
  result = 1 / number.
  ...
ENDCATCH.
IF sy-subrc <> 0.
  ...
ENDIF.

Continue
[ENDCATCH](javascript:call_link\('abapendcatch.htm'\))


### abapendcatch.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Catchable Runtime Errors](javascript:call_link\('abensystem-exceptions.htm'\)) →  [CATCH SYSTEM-EXCEPTIONS](javascript:call_link\('abapcatch_sys.htm'\)) → 

ENDCATCH

[Quick Reference](javascript:call_link\('abapcatch_system-except_shortref.htm'\))

Obsolete Syntax

ENDCATCH.

Effect

The statement ENDCATCH closes a control structure introduced by [CATCH SYSTEM-EXCEPTIONS](javascript:call_link\('abapcatch_sys.htm'\)).


### abapcatch_sys.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Catchable Runtime Errors](javascript:call_link\('abensystem-exceptions.htm'\)) → 

CATCH SYSTEM-EXCEPTIONS

[Quick Reference](javascript:call_link\('abapcatch_system-except_shortref.htm'\))

Obsolete Syntax

CATCH SYSTEM-EXCEPTIONS *\[*exc1 = n1 exc2 = n2...*\]*
                        *\[*OTHERS = n\_others*\]*.
  *\[*statement\_block*\]*
ENDCATCH.

Effect

Handling [Catchable Runtime Errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry"). The statement CATCH SYSTEM-EXCEPTIONS introduces a control structure containing a statement block statement\_block that is always processed. In the list exc1 = n1 exc2 = n2 ..., [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry") and [exception groups](javascript:call_link\('abenexception_group_glosry.htm'\) "Glossary Entry") can be specified in any order. A directly specified number n1 n2 ... must be assigned to each of them.

The OTHERS addition can be executed independently or after the list exc1 = n1 exc2 = n2 .... Its effect is the same as specifying an exception group that includes all catchable runtime errors of the runtime environment.

The system handles the CATCH control structure as follows:

-   If one of the specified catchable runtime errors or a catchable runtime error contained in the specified exception groups occurs, the execution of the statement block is immediately terminated, the program continues after the statement ENDCATCH, and the number n1 n2 ... assigned to the catchable runtime error or the exception group, is stored for evaluation in the system field sy-subrc. If the list contains a catchable runtime error and its exception group or if a catchable runtime error occurs in some of the specified exception groups, sy-subrc contains the assigned number of the first position in the list.
    
-   If a catchable runtime error that is not specified in the statement CATCH SYSTEM-EXCEPTIONS or is not contained in one of the specified exception groups occurs in the statement block, the program terminates with a [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry")
    
-   If the end of the statement block is reached and no runtime error occurs, sy-subrc is set to 0.
    

A CATCH control structure cannot be defined in the same [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry"), in which the class-based exceptions are handled in a [TRY](javascript:call_link\('abaptry.htm'\)) control structure or are raised by the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or by the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)).

Notes

-   Catchable runtime errors are not passed from called [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") to the caller. They can only be caught within a processing block. Within a processing block, catchable runtime errors are caught in control structures that can be nested in any depth. If multiple CATCH control structures are nested, the system branches behind the ENDCATCH statement of the inner CATCH control structure that handles the runtime error.
    
-   The handling of catchable runtime errors using CATCH SYSTEM-EXCEPTIONS is obsolete and should be replaced by a [TRY](javascript:call_link\('abaptry.htm'\)) control structure. Since class-based exceptions are assigned to all catchable runtime errors, this is possible without restriction. The class-based exceptions can also be passed from a procedure using RAISING, as well as by using TRY.
    

Example

Catches all possible catchable runtime errors in a statement block. Catchable runtime errors of the exception group ARITHMETIC\_ERRORS set sy-subrc to 4, all other catchable runtime errors set sy-subrc to 8. The division by 0 causes the catchable runtime error COMPUTE\_INT\_ZERODIVIDE, which is contained in the exception group ARITHMETIC\_ERRORS. In this case, sy-subrc is also set to 4.

DATA: result TYPE i,
      number TYPE i.
CATCH SYSTEM-EXCEPTIONS arithmetic\_errors = 4
                        OTHERS = 8.
  ...
  result = 1 / number.
  ...
ENDCATCH.
IF sy-subrc <> 0.
  ...
ENDIF.

Continue
[ENDCATCH](javascript:call_link\('abapendcatch.htm'\))
