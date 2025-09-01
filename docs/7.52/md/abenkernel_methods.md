---
title: "Kernel Methods"
description: |
  For internal use, kernel methods can be implemented in the ABAP kernel(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkernel_glosry.htm 'Glossary Entry') instead of in the ABAP language. Introduction Kernel methods allow ABAP kernel functions implemented in C or C++ to be called di
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkernel_methods.htm"
abapFile: "abenkernel_methods.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "abenkernel", "methods"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm) →  [Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses.htm) →  [Components of Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_components.htm) →  [Methods of Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_methods.htm) → 

Kernel Methods

For internal use, kernel methods can be implemented in the [ABAP kernel](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkernel_glosry.htm "Glossary Entry") instead of in the ABAP language.

Introduction

Kernel methods allow ABAP kernel functions implemented in C or C++ to be called directly. Kernel methods replace the previous concepts of [C calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall-.htm) and system calls. New C calls or system calls should be avoided.

Kernel methods offer the same checks and security features as regular ABAP methods. Except for the [constructors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor.htm) and the [C destructor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenc_destructor.htm), all ABAP methods can be implemented as kernel methods. An ABAP method can still be redefined as a kernel method and a kernel method can still be redefined as an ABAP method within a path of the inheritance hierarchy.

For C developers who want to implement a kernel method, an API is available that allows simple, high-performance, and secure access to arguments. [Class-based exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions.htm) also continue to be supported.

Defining Kernel Methods

Declaration in ABAP

A kernel method is declared in the same way as a regular ABAP method, either in [Class Builder](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_builder_glosry.htm "Glossary Entry") or in the declaration part of a local class. The implementation of a method as a kernel method is not important for the declaration. In ABAP, this means that a kernel method can be used just like a regular ABAP method.

Implementation in ABAP

A method is specified as a kernel method in the implementation part of the class using the optional addition [BY KERNEL MODULE kmod1 kmod2 ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethod_kernel_module_internal.htm) of the statement [METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethod.htm). kmod1, kmod2, ... are the names of kernel modules that implement the method. The ABAP implementation of a kernel method must be empty, which means that there cannot be any ABAP statements between METHOD and ENDMETHOD:

METHOD meth BY KERNEL MODULE kmod1 kmod2 ...
ENDMETHOD.

[Constructors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor.htm) and the [C destructor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenc_destructor.htm) cannot be implemented as kernel methods. There is a separate mechanism for the C Destructor.

After KERNEL MODULE, a list of kernel modules kmod1, kmod2, ... can be specified. Currently, only C functions of the kernel can be specified for kmod1, kmod2, ... The list after KERNEL MODULE is evaluated by the compiler from left to right. The first kernel module in the list that is registered in the kernel (see below) is used in the generation.

If no valid kernel module is found in the list, a syntax error occurs. There are still two standard C functions that can appear at the end of the list, namely FAIL and IGNORE. If one of these functions is specified at the end of the list, a syntax error is avoided if the previous list does not contain a valid module. IGNORE is used to ignore the call of a kernel method of this type (the same behavior as in an empty ABAP implementation) and, in the case of FAIL, a handleable exception of the class CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD is raised.

Examples

METHOD meth BY KERNEL MODULE xx\_impl\_630 xx\_impl\_620 xx\_impl\_610.

First, the kernel is searched for xx\_impl\_630. The kernel is then searched for xx\_impl\_620, and finally for xx\_impl\_610. If none of these functions are found, a syntax error occurs.

METHOD meth BY KERNEL MODULE xx\_impl\_630 xx\_impl\_620 FAIL.

First, the kernel is searched for xx\_impl\_630. Then the kernel is searched for xx\_impl\_620. If neither of these functions are found, no syntax error occurs and a handleable exception of the class CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD is raised instead when the method is called.

METHOD meth BY KERNEL MODULE xx\_impl\_620 xx\_impl\_610 IGNORE.

First, the kernel is searched for xx\_impl\_620. Then the kernel is searched for xx\_impl\_610. If none of the functions are found, no syntax error occurs and the empty ABAP implementation is called instead when the method is called.

Implementation in the Kernel

Currently, only C functions can be used as kernel modules of kernel methods. The C functions can have any position in the kernel. No special includes from the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") are required for implementing the C function. The C functions must have a specific interface. The interface itself is wrapped by a [macro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmacro_glosry.htm "Glossary Entry") called ARGUMENTS. All required definitions and prototypes are in the include //src/include/abkmeth.h. This is the only include needed for defining C functions for kernel methods.

Since C functions can be defined in C and C++ , externC must be used in C++:

#include "abkmeth.h"
...
externC void name\_of\_cmodule( ARGUMENTS )
{
...
}

A C function that implements a kernel method must be registered for the kernel method. If, after METHOD meth BY KERNEL MODULE, the name of a C function is specified that was not registered for the kernel method, a syntax error occurs (as mentioned above). Multiple C functions can be registered for one kernel method. The order of the kernel modules kmod1, kmod2, ... specified in the list after METHOD meth BY KERNEL MODULE defines which of the registered C functions is used. This allows downward-compatible further development of kernel methods.

To make changes to the registration active, the destination lib of the project krn/runt must be recompiled and the kernel relinked.

Registration

C functions are registered in the signature file //src/krn/runt/abkmeth.sig using the following syntax for kernel methods (all ABAP IDs must be specified in uppercase letters):

KERNEL\_METHOD("CLASS","METH", cfunc,argcnt)

This definition registers the C function cfunc for the kernel method meth of a global class class. The C function expects a number of argcnt arguments.

Kernel methods of local classes in class pools or other ABAP programs are registered using the following macros:

KERNEL\_METHOD\_CLASS\_LOCAL("GCLASS","CLASS","METH",cmodule,argcnt)

KERNEL\_METHOD\_PROGRAM\_LOCAL("PROG","CLASS","METH",cmodule,argcnt)

The technique is the same as with KERNEL\_METHOD, except that the global class gclass must be specified for local classes in class pools and the program prog for program-local classes.

Registering Arguments

All ABAP data objects (such as parameters, attributes, or global data) that are accessed in C functions for kernel methods are handled as arguments of the C function.

The argument list of a C function for a kernel method is not limited to the interface parameters of the ABAP method and does not have to contain all of them. These arguments must be registered before arguments within C functions are accessed for kernel methods.

The argcnt arguments must be registered immediately after the C function is registered using KERNEL\_METHOD. A single argument is defined (or registered) using one of the following macros:

ARGUMENT\_basetype(index,"name",type\_kind,"type",read\_write)

ARGUMENT\_*\[*C*|*N*|*X*\]*(index,"name",type\_kind,"type",read\_write,length)

ARGUMENT\_P(index,"name",type\_kind,"type",read\_write,length,decimals)

ARGUMENT\_STRUCT(index,"name",type\_kind,"type",read\_write,ctype)

These [macros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmacro_glosry.htm "Glossary Entry") define an argument with the name name and an index index.

basetype must be used to assign the type of the ABAP data object in accordance with the following table. If the basetype is C, N, X, P, or STRUCT, more parameters must be specified than for other types.

basetype

ABAP Data Type

Type in C

C

c with specified length

SAP\_CHAR (\*) *\[*Length*\]*

C\_GENERIC

c without specified length

SAP\_CHAR\*

X

x with specified length

SAP\_RAW (\*) *\[*Length*\]*

X\_GENERIC

x without specified length

SAP\_RAW\*

N

n with specified length

SAP\_CHAR (\*) *\[*Length*\]*

N\_GENERIC

n without specified length

SAP\_CHAR\*

P

p with specified length and decimals

SAP\_BCD (\*) *\[*Length*\]*

P\_GENERIC

p without specified length and decimals

SAP\_BCD\*

D

d

SAP\_DATE\*

T

t

SAP\_TIME\*

I

i

SAP\_INT\*

INT1

b

SAP\_INT1\*

INT2

s

SAP\_SHORT\*

INT8

int8

SAP\_LLONG\*

F

f

SAP\_DOUBLE\*

DECFLOAT16

decfloat16

DecFloat16

DECFLOAT34

decfloat34

DecFloat34

STRING

string

StrRef\*

XSTRING

xstring

StrRef\*

TABLE

All table types

TABH\_REF\*

OBJ\_REF

All object references

ObjRef\*

DATA\_REF

All data references

FldRef\*

STRUCT

All structure types

Registered type ctype\*

ANY

any

void\*

DATA

data

void\*

SIMPLE

simple

void\*

CSEQUENCE

csequence

void\*

XSEQUENCE

xsequence

void\*

NUMERIC

numeric

void\*

CLIKE

clike

SAP\_CHAR\*

C\_POINTER

%\_c\_pointer

void\*\*

The macro parameters have the following meanings:

-   name is the ID for any ABAP data object in uppercase letters that could also be used in an ABAP implementation of the kernel method. In particular, the ID can contain references specified using component selectors, for example me->attr or struc-comp.

-   index is a sequential number from 1 to argcnt. The arguments are accessed using this index.

-   For type\_kind, either TYPE or TYPE\_REF\_TO can be specified.

-   type is the ID for any ABAP data type in uppercase letters that could also be used in an ABAP implementation of the kernel method. type\_kind and type are used to check the interface of the kernel method in ABAP.

-   For read\_write, either READ or WRITE can be specified. This defines whether reads or writes can be performed on the argument and this setting is evaluated in the access macros.

-   In the case of ARGUMENT\_*\[*C*|*N*|*X*|*P*\]*, length must be used to specify the length of all ABAP data types with a generic length. (This is specified in characters in the case of c and n and in bytes in the case of x and p.)

-   When using ARGUMENT\_P, decimals must be used to specify the number of [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecimal_place_glosry.htm "Glossary Entry").

-   When using ARGUMENT\_STRUCT, ctype must be used to specify a suitable C type. This type should be generated from an ABAP type definition using saphfile.

Accessing Arguments

After registering the arguments, the following macros can be used to access them within the C function. With the exception of direct access to the data control block, the access macros do not require any includes from the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry").

ARGUMENT\_basetype\_READ(index,"name");

This [macro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmacro_glosry.htm "Glossary Entry") returns the read address of an argument with the type const ctype, where ctype is defined by basetype according to the above table. The index and name of the argument must be passed. Additional parameters must be specified for the generic types (see below). Only the index is needed to access the argument. However, to make the C function more legible and to ensure that additional consistency checks can be executed, the name must also be specified. If the kernel is compiled in debugging mode, the system executes a consistency check between index and name and the specified C type and ABAP type of the argument are also checked. In the case of an error, an appropriate ABAP runtime error occurs (KMETH\_INVALID\_ARGUMENT\_ID, KMETH\_INVALID\_ARGUMENT\_NAME, or KMETH\_INVALID\_CTYPE\_LENG). No checks are made in the optimized kernel.

ARGUMENT\_basetype\_WRITE(index,"name");

This macro has the same semantics as ARGUMENT\_basetype\_READ. However, the system returns the write address. The system also checks whether the argument was defined as a write argument. If a write is performed on a read-only argument (for example, a constant), this the ABAP runtime error KMETH\_ARGUMENT\_READ\_ONLY occurs.

ARGUMENT\_*\[*C*|*N*\]*\_READ(index,"name",lengthU);
ARGUMENT\_*\[*C*|*N*\]*\_WRITE(index,"name",lengthU);
ARGUMENT\_X\_READ(index,"name",lengthR);
ARGUMENT\_X\_WRITE(index,"name",lengthR);

If these macros are used, the expected length in bytes lengthR or in characters lengthU must be specified for the generic types c, x, and n.

ARGUMENT\_P\_READ(index,"name",lengthR,decimals);
ARGUMENT\_P\_WRITE(index,"name",lengthR,decimals);

If these macros are used, the expected length in bytes (lengthR) and the number of decimal places (decimals) must be specified for the generic type p.

ARGUMENT\_*\[*C\_GENERIC*|*N\_GENERIC*|*CLIKE*\]*\_READ(index,"name",size\_tU);
ARGUMENT\_*\[*C\_GENERIC*|*N\_GENERIC*|*CLIKE*\]*\_WRITE(index,"name",size\_tU);
ARGUMENT\_X\_GENRIC\_READ(index,"name",size\_tR);
ARGUMENT\_X\_GENERIC\_WRITE(index,"name",size\_tR);

If these macros are used, a variable of the type size\_tU or size\_tR containing the length in bytes or characters must be specified for the types C\_GENERIC, X\_GENERIC, N\_GENERIC, and CLIKE.

ARGUMENT\_P\_GENERIC\_READ(index,"name",size\_tR,decimals);
ARGUMENT\_P\_GENERIC\_WRITE(index,"name",size\_tR,decimals);

If these macros are used, a variable decimals (for the [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecimal_place_glosry.htm "Glossary Entry")) as well as the length size\_tR must be specified for the type P\_GENERIC.

ARGUMENT\_STRUCT\_READ(index,"name",ctype);
ARGUMENT\_STRUCT\_READ(index,"name",ctype);

If these macros are used, a suitable C type ctype must be specified for all structured types STRUCT.

ARGUMENT\_C\_POINTER(index,"name");

This [macro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmacro_glosry.htm "Glossary Entry") is used specifically for the type %\_c\_pointer. This type is a special internal ABAP type that has exactly the byte length of a C pointer (4, 8, or 16 bytes, depending on the platform). The type is always mapped to the predefined ABAP type x. The macros for the type X or X\_GENERIC are not used due to the variable length and platform-dependency.

ARGUMENT\_IS\_SUPPLIED(index,"name");

This macro has the same semantics as the [predicate expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") IS SUPPLIED in ABAP. The same consistency checks are executed as for ARGUMENT\_READ.

ARGUMENT\_DATA(index,"name",ctype);

This macro returns the data control block with the C type const DATA \*. The same consistency checks are executed as for ARGUMENT\_READ. The macro is only active if the include //src/include/abdata.h of the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") was included.

Raising Exceptions

C functions that implement kernel methods can raise [class-based exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions.htm).

Registering Exceptions

The relevant global exception classes must be registered with an extension of //src/include/abexcpc.h. Local exception classes cannot be registered.

The exception class is declared in //src/include/abexcpc.h and any text IDs are defined:

//src/include/abexcpc.h
...
CX\_ABSTR (CX\_..., "CX\_...")
CX\_TXTID (CX\_...\_bar, CX\_..., "BAR")  /\* special text for class \*/
...

Classes can also be declared with their standard text only:

//src/include/abexcpc.h
...
CX\_CLASS (CX\_..., "CX\_...")           /\* class with standard text \*/
...

The exact documentation is in the file //src/include/abexcpc.h.

The file //src/include/abexcpa.h must be expanded so that any attributes of an exception class in a C function can be populated. The name, internal type (according to //src/include/abtypes.h), and the byte length must be specified:

//src/include/abexcpa.h
...
CX\_ATTR (CX\_...\_attr1, CX\_..., "ATTR1", TYPCSTRING, sizeofR(StrRef))
CX\_ATTR (CX\_...\_attr2, CX\_..., "ATTR2", TYPC, LEN\_UC2RAW(30))
...

Finally, both exceptions and arguments must be registered in the file //src/krn/runt/abkmeth.sig. This is not forced but, during the syntax check, only registered exceptions are checked for their existence:

//src/krn/runt/abkmeth.sig
...
EXCEPTION(CX\_...)
...

Raising Exceptions

A C function can raise an exception by calling the following macros consecutively:

EXCEPTION\_CREATE(CX\_...\_bar);
EXCEPTION\_SET\_CSTRING(CX\_...\_attr1, value, valueLength);
EXCEPTION\_SET\_C      (CX\_...\_attr2, value, valueLength);
EXCEPTION\_RAISE();

Within the macros EXCEPTION\_CREATE or EXCEPTION\_RAISE, a long jump to Extri always takes place, which means that the C function that implements the kernel method is exited in a long jump and the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") takes control. Therefore, the C function should release its temporary memory before raising an exception. If the exception is caught in ABAP using [CATCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_try.htm) without the addition INTO, the long jump takes place in EXCEPTION\_CREATE. If the exception is caught using the addition INTO (the exception object is used) or not caught at all, the long jump takes place in EXCEPTION\_RAISE.

The exceptions are processed in the runtime environment as if they were raised in ABAP and the same dynamic checks are executed.

Currently, the following [macros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmacro_glosry.htm "Glossary Entry") (which can be expanded if necessary) are available for setting exception attributes. Strings, integers, and C fields are currently supported. See the sequence above for information about how to use them.

EXCEPTION\_SET\_CSTRING\_UC
EXCEPTION\_SET\_C

Value with length specified:

EXCEPTION\_SET\_C\_UC
EXCEPTION\_SET\_INT

Value with null termination:

Auxiliary Program for Kernel Methods

The ABAP program RSKMETH is used as a browser for the registration of kernel modules. This can be used to ascertain which C functions are registered for which kernel methods and which arguments/exceptions are registered for these functions. This is helpful when analyzing syntax errors, since kernel methods process information that only exists in the kernel modules.

Example

The following example is a simplified calculation class for floating decimal place numbers. The class has an instance attribute in which the last result of each calculation is stored. A method performs a division and is implemented as a kernel method. If the divisor is zero, the method raises a class-based exception.

Declaration Part of the Class in ABAP

CLASS cl\_my\_calculation DEFINITION ...
...
  DATA last\_result TYPE decfloat16.
...
  METHODS div
    IMPORTING p\_dividend TYPE decfloat16 p\_divisor TYPE decfloat16
    RETURNING VALUE(p\_result) TYPE decfloat16.
...
ENDCLASS.

Signature File //src/krn/runt/abkmeth.sig in the Kernel

...
KERNEL\_METHOD(CL\_MY\_CALCULATION, DIV, xx\_myDiv,4)
  ARGUMENT\_F(1, "P\_DIVIDEND",     TYPE, "F", READ)
  ARGUMENT\_F(2, "P\_DIVISOR",      TYPE, "F", READ)
  ARGUMENT\_F(3, "P\_RESULT",       TYPE, "F", WRITE)
  ARGUMENT\_F(4, "ME->LAST\_RESULT",TYPE, "F", WRITE)
  EXCEPTION("CX\_MY\_DIV\_BY\_ZERO")
...

C++ Source Code //src/krn/.../mycalc.cpp in the Kernel

#include "abkmeth.h"
...
externC void xx\_myDiv( ARGUMENTS ){
  const SAP\_DOUBLE \*const dividend = ARGUMENT\_F\_READ(1,"P\_DIVIDEND");
  const SAP\_DOUBLE \*const divisor  = ARGUMENT\_F\_READ(2,"P\_DIVISOR");
  SAP\_DOUBLE \*result               = ARGUMENT\_F\_WRITE(3,"P\_RESULT");
  SAP\_DOUBLE \*last\_result          = ARGUMENT\_F\_WRITE(4,"ME->LAST\_RESULT");
  if( 0 == \*divisor )
  {
    EXCEPTION\_CREATE(CX\_MY\_DIV\_BY\_ZERO);
    EXCEPTION\_RAISE();
  }
  \*result = \*dividend / \*divisor;
  \*last\_result = \*result;
}

Implementation Part of the Class in ABAP

CLASS cl\_my\_calculation IMPLEMENTATION.
...
METHOD div BY KERNEL MODULE xx\_myDiv.
ENDMETHOD.
...
ENDCLASS.