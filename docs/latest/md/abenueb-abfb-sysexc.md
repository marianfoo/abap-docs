  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_program_flow.htm) →  [Obsolete Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem-exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Alphabetical%20Overview%20of%20Catchable%20Runtime%20Errors%2C%20ABENUEB-ABFB-SYSEXC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

Alphabetical Overview of Catchable Runtime Errors

The following is an alphabetical list of the obsolete catchable runtime errors. For each catchable runtime error, the associated [predefined exception class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_exception_classes.htm) used to handle the corresponding runtime error is specified. If an exception class is assigned to multiple catchable runtime errors, it may contain as many message texts as required, which can be found in the [Class Builder](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_builder_glosry.htm "Glossary Entry") on the Texts tab.

Almost all the runtime errors listed here are grouped together in [exception groups](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_group_glosry.htm "Glossary Entry"). These exception groups are also assigned those ABAP keywords for which the runtime errors can be caught.

ADDF\_INT\_OVERFLOW   

Overflow in conversions/arithmetic operations (types i and int8)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

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

COMPUTE\_ATAN\_DOMAIN   

Invalid call of the numeric function atan

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_BCD\_OVERFLOW   

Overflow after arithmetic operation (all operands of type p)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_COSH\_OVERFLOW   

Overflow after the numeric function cosh

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_COS\_DOMAIN   

Invalid call of the numeric function cos

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_COSH\_DOMAIN   

Invalid call of the numeric function cosh

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_COS\_LOSS   

Result of the function cos is not precise

Exception class: CX\_SY\_PRECISION\_LOSS

COMPUTE\_EXP\_DOMAIN   

Invalid call of the numeric function exp

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

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

COMPUTE\_MATH\_DOMAIN   

Invalid calculation

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_MATH\_LOSS   

Result of a calculation is not precise

Exception class: CX\_SY\_PRECISION\_LOSS

COMPUTE\_MATH\_OVERFLOW   

Overflow in a calculation

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

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

COMPUTE\_SINH\_DOMAIN   

Invalid call of the numeric function sinh

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

COMPUTE\_TANH\_DOMAIN   

Invalid call of the numeric function tanh

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_TAN\_LOSS   

Result of the function tan is not precise

Exception class: CX\_SY\_PRECISION\_LOSS

CONNE\_IMPORT\_WRONG\_COMP\_DECS   

Import error; a component of a structured type in the data set has incorrect [decimal places](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfract_digit_glosry.htm "Glossary Entry")

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_COMP\_LENG   

Import error; a component of a structured type in the data set has an incorrect length

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_COMP\_TYPE   

Import error; a component of a structured type in the data set has an incorrect type

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_DECS   

Import error; a field type in the data set has incorrect [decimal places](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfract_digit_glosry.htm "Glossary Entry")

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_LENG   

Import error; a field in the data set has an incorrect length

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_TYPE   

Import error; a field in the data set has an incorrect type

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

Conversion of texts from [code page](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencodepage_glosry.htm "Glossary Entry") to code page not supported

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

The type specified dynamically in the addition TYPE is not completely typed

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

DATA\_OFFSET\_TOO\_LARGE   

Invalid substring access: Offset too large

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

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

Error when reading a file

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

Error when writing in a file

Exception class: CX\_SY\_FILE\_IO

DYN\_CALL\_METH\_CLASSCONSTRUCTOR   

An attempt was made to call the class constructor.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_CLASS\_ABSTRACT   

An attempt was made to call a method from an abstract class.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_CLASS

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

An attempt was made to call a [protected](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprotected_glosry.htm "Glossary Entry") method externally.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_REF\_IS\_INITIAL   

An attempt was made to call a method on an initial reference.

Exception class: CX\_SY\_REF\_IS\_INITIAL

EXPORT\_BUFFER\_NO\_MEMORY   

The EXPORT [data cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster_glosry.htm "Glossary Entry") is too big for the application buffer.

Exception class: CX\_SY\_EXPORT\_BUFFER\_NO\_MEMORY

EXPORT\_DATASET\_CANNOT\_OPEN   

The IMPORT/EXPORT statement could not open the file.

Exception class: CX\_SY\_FILE\_OPEN

EXPORT\_DATASET\_WRITE\_ERROR   

The export statement could not write to the file.

Exception class: CX\_SY\_FILE\_IO

GENERATE\_SUBPOOL\_DIR\_FULL   

No further temporary [subroutine pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubroutine_pool_glosry.htm "Glossary Entry") can be generated.

Exception class: CX\_SY\_GENERATE\_SUBPOOL\_FULL

IMPORT\_ALIGNMENT\_MISMATCH   

Import error; same sequence of components but with type conflicts or mismatches in structured data types

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

No authorization for accessing file (OPEN DATASET...FILTER...)

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

Communication error in the remote method call

Exception class: CX\_SY\_RMC\_COMM\_FAILURE

RMC\_INVALID\_STATUS   

State error in the remote method call

Exception class: CX\_SY\_RMC\_INVALID\_STATUS

RMC\_SYSTEM\_FAILURE   

System error in the remote method call

Exception class: CX\_SY\_RMC\_SYSTEM\_FAILURE

STRING\_LENGTH\_NEGATIVE   

Invalid access with negative length to a string

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_LENGTH\_TOO\_LARGE   

Invalid access to a string (length too long)

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_NEGATIVE   

Invalid access with negative offset to a string

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_TOO\_LARGE   

Invalid access to a string (offset too large)

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_LENGTH\_TOO\_LARGE   

Invalid offset to a string (offset plus length too large)

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

TEXTENV\_CODEPAGE\_NOT\_ALLOWED   

Code page used is not released.

Exception class: CX\_SY\_LOCALIZATION\_ERROR

TEXTENV\_INVALID   

Error in the configuration of the [text environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment_glosry.htm "Glossary Entry") (SET LOCALE...)

Exception class: CX\_SY\_LOCALIZATION\_ERROR

TEXTENV\_KEY\_INVALID   

Invalid key when accessing the text environment table.

Exception class: CX\_SY\_LOCALIZATION\_ERROR