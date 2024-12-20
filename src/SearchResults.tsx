import { Card } from "@chakra-ui/react";
import { Avatar } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import { Text } from "@chakra-ui/react";

export const SearchResults = () => {
  return (
    <Card.Root width="xl">
      <Card.Body gap="2">
        <Avatar
          src="https://picsum.photos/200/300"
          name="Nue Camp"
          size="lg"
          shape="rounded"
        />
        <Card.Title mt="2">Nue Camp</Card.Title>
        <Card.Description>
          <Text>
            This is the card body. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
            Curabitur nec odio vel dui euismod fermentum.
          </Text>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            bibendum leo. Pellentesque sodales, enim dictum tincidunt laoreet,
            tellus odio imperdiet sem, id luctus justo augue nec velit.
            Phasellus fermentum vitae leo quis viverra. In hac habitasse platea
            dictumst. Aliquam gravida tristique commodo. Fusce feugiat arcu
            diam, at eleifend urna mattis vel. Proin id erat condimentum,
            sagittis orci id, bibendum ante. Vivamus varius risus non odio
            pellentesque pharetra. Praesent congue mollis aliquet. Fusce a
            finibus sem. Nunc nibh lectus, consequat sed aliquam pharetra,
            iaculis hendrerit nibh. Praesent dignissim est sit amet diam
            pharetra viverra. Morbi in nulla et metus sodales hendrerit. In sit
            amet bibendum lectus. Etiam finibus libero a sem imperdiet placerat.
            Curabitur non commodo erat, at fermentum velit.
          </Text>
          <Text>
            Nulla id elementum turpis, at lacinia ante. Maecenas sed quam sit
            amet tortor mattis varius ultricies vel sapien. Ut eget sagittis
            augue, vel congue nunc. Mauris viverra ante nec risus scelerisque
            mattis. Sed accumsan consectetur odio, eu viverra ex aliquam nec.
            Suspendisse dapibus et risus ac vestibulum. Cras et faucibus tellus.
            Duis posuere purus sit amet magna vulputate lobortis. Mauris euismod
            sapien eleifend tempus fringilla. Sed ullamcorper, felis id molestie
            pulvinar, leo diam egestas libero, et mollis nibh lorem id quam.
            Proin et massa eget magna dapibus imperdiet. Nunc vel faucibus
            metus. Fusce tincidunt faucibus neque vitae luctus. Quisque ut
            semper lacus. Etiam nec consequat enim.
          </Text>
          {/* <Text>
            Cras id tincidunt dolor. Sed nec scelerisque dolor. Nunc quis auctor
            nulla, vel malesuada augue. Suspendisse elementum eget nulla et
            lobortis. Sed viverra accumsan turpis, sit amet suscipit urna
            dignissim eu. Donec placerat, justo sed ornare finibus, arcu metus
            sollicitudin felis, sit amet sollicitudin lectus mauris nec ex.
            Maecenas tincidunt risus pellentesque augue lobortis auctor. Donec
            id lacus in purus consequat dictum. Vestibulum scelerisque
            sollicitudin quam nec sollicitudin. Vivamus luctus purus ut magna
            consequat, vitae pharetra neque tristique. Aliquam efficitur
            venenatis mauris. Aliquam erat volutpat. Ut tincidunt ipsum vitae
            justo pharetra varius. Cras vitae lacus sed erat condimentum lacinia
            eu non justo. Ut sit amet venenatis diam. Vivamus commodo consequat
            elementum.
          </Text>
          <Text>
            Curabitur molestie consequat commodo. Vivamus posuere, leo a laoreet
            ornare, ligula nulla lobortis leo, at finibus arcu felis id nulla.
            Maecenas id porta nisl, eu commodo turpis. Vivamus rhoncus, turpis
            vel finibus elementum, velit massa imperdiet urna, eu scelerisque
            est eros eu nibh. In hac habitasse platea dictumst. Nulla vel nibh
            lorem. Curabitur a orci suscipit dui eleifend mattis sit amet non
            nisl. Nunc iaculis ullamcorper sollicitudin.
          </Text>
          <Text>
            Curabitur dignissim enim sit amet nunc ultricies sodales.
            Suspendisse viverra quam sed ligula tempus luctus. Cras in mauris
            vestibulum, rhoncus nulla ut, pulvinar purus. Sed id neque ut eros
            gravida commodo. Curabitur interdum blandit rhoncus. Nam ipsum
            metus, blandit eu consectetur at, vestibulum quis ipsum. Mauris at
            porttitor diam. Donec feugiat consequat purus, sit amet porttitor
            diam ornare non.
          </Text>
          <Text>
            Sed eleifend vitae nisl quis faucibus. Nulla semper sed ligula quis
            hendrerit. Duis et diam id turpis varius fringilla id quis leo. Sed
            vitae sagittis orci. Suspendisse accumsan a felis ac ultrices.
            Suspendisse pulvinar et ligula sit amet sodales. Maecenas vehicula
            justo est, et suscipit orci convallis in. Maecenas sodales euismod
            tortor ut vestibulum. Sed ante ligula, cursus nec diam eget, ornare
            fermentum nisl. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas.
          </Text>
          <Text>
            Donec at urna non eros tempor faucibus ut quis nunc. Duis faucibus
            vestibulum mauris, in hendrerit ipsum feugiat ut. Sed in elit ante.
            Nam pellentesque finibus ipsum, sodales commodo quam ullamcorper et.
            Etiam eu ornare felis. Aenean ut arcu nibh. Cras at urna id orci
            commodo volutpat eu non lectus. Sed elementum ut libero nec tempor.
            Etiam laoreet id elit nec vehicula. In sodales eros in lectus
            finibus vestibulum. Maecenas tellus diam, elementum iaculis
            tristique sit amet, bibendum pharetra arcu. Curabitur bibendum diam
            et enim tempor venenatis.
          </Text>
          <Text>
            Integer sagittis ante ut massa molestie sollicitudin. Morbi ornare
            nibh eget facilisis lobortis. In elementum ipsum ac risus mollis
            rhoncus. Praesent rhoncus condimentum elit, ac fermentum urna semper
            a. In fringilla vulputate erat id auctor. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Sed ac finibus nunc. Ut mollis mattis dolor, a rutrum
            lorem tincidunt at. Integer sed fringilla lacus. Sed ut porttitor
            lectus, et iaculis magna. Ut rutrum vehicula magna, sed tempor erat
            vehicula in. Vivamus a rutrum orci, a ultricies diam. Integer ligula
            turpis, mattis vel mattis in, laoreet id mauris.
          </Text>
          <Text>
            Donec quis bibendum lorem. Sed tristique molestie erat, et venenatis
            ligula commodo et. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin blandit in dolor ac faucibus. Nullam interdum
            pharetra metus, vel porta risus efficitur ut. Vestibulum at mi
            tristique, blandit sapien in, dignissim nisi. Integer ut nunc sed
            odio efficitur condimentum id quis magna. Ut et justo sollicitudin,
            volutpat neque accumsan, malesuada massa.
          </Text>
          <Text>
            Morbi quis sollicitudin leo, at dictum magna. Curabitur ligula
            nulla, egestas a tincidunt vel, pulvinar molestie ligula. Nam eros
            nulla, sodales a fringilla dignissim, fringilla suscipit velit.
            Phasellus egestas, metus vitae aliquam cursus, velit orci ultricies
            ligula, a pellentesque lorem tellus quis eros. Pellentesque lorem
            lectus, pellentesque vitae metus eu, finibus mollis dui. Morbi
            elementum, ligula vitae faucibus dapibus, nisi ligula ullamcorper
            neque, non vestibulum ipsum erat et sem. Proin fermentum, neque et
            finibus aliquam, eros nibh aliquam enim, ac egestas ligula purus
            vitae diam. Morbi nunc elit, lacinia sit amet feugiat non, tempor in
            dolor. Cras lacinia, purus sed ultrices vestibulum, neque augue
            elementum tellus, et bibendum libero mauris ac mi. In fermentum
            consequat sapien eu tristique. Maecenas ante orci, commodo vel
            sapien vitae, consequat sollicitudin est. Nullam tincidunt tincidunt
            eros non luctus. Etiam quis turpis vel velit iaculis dapibus.
          </Text>
          <Text>
            Quisque vitae blandit lectus. Quisque nec orci id felis ornare
            aliquam. In tempor nunc felis, sed efficitur arcu condimentum ut.
            Morbi vel tortor nisi. Pellentesque a magna molestie, posuere nisl
            in, auctor lectus. Aenean sodales venenatis elit, at finibus quam.
            Duis sit amet nisi risus. Morbi tincidunt urna porta nisl laoreet
            sagittis. Nullam nisi urna, auctor in elit in, dapibus maximus
            ipsum. Maecenas a nisl commodo, viverra nibh in, rhoncus mauris.
            Duis maximus, metus eget suscipit venenatis, justo mi sagittis
            lectus, et ornare velit ex id tortor. Sed sit amet elementum leo,
            dignissim dapibus leo. Aenean at tellus ac tortor fermentum
            tristique. Ut posuere lectus arcu, vitae ultricies sapien mattis sit
            amet. Nam lobortis risus eu nunc blandit dictum. Cras ultrices orci
            suscipit arcu volutpat accumsan.
          </Text>
          <Text>
            Aenean gravida, nulla vel convallis pharetra, lacus ligula ultrices
            magna, sed hendrerit massa velit efficitur tortor. Suspendisse
            faucibus commodo maximus. Morbi tincidunt condimentum tortor, vel
            pharetra purus semper quis. Mauris pharetra, libero in finibus
            efficitur, lorem leo sodales urna, vitae condimentum tortor lacus a
            tortor. Curabitur lorem mi, eleifend eu felis et, congue eleifend
            nulla. Curabitur sit amet interdum libero. Vivamus eget enim
            pharetra, maximus lacus vel, imperdiet justo. Maecenas faucibus
            ipsum ac mauris volutpat, quis ultrices nisi tristique.
          </Text>
          <Text>
            Maecenas viverra malesuada tortor, ut varius orci suscipit ut.
            Aliquam eu leo suscipit, lacinia diam sed, facilisis est. Donec diam
            felis, aliquam eget felis at, posuere tempor erat. Duis consequat
            laoreet ligula, sed tempus leo. Donec ac varius nisl, a pretium mi.
            Nulla feugiat felis sed metus vestibulum, id tempor lectus
            condimentum. Fusce augue lorem, tincidunt eu eros sed, tincidunt
            cursus arcu. Nulla suscipit orci eget risus dignissim, vitae euismod
            libero elementum. Sed eget velit eget urna interdum lobortis.
            Praesent id facilisis mi, in tempus mauris. Ut blandit tempor risus.
            Sed sagittis magna dui, vitae tempus ligula sodales nec.
          </Text>
          <Text>
            Donec luctus nulla a erat interdum varius. Donec eu erat in nulla
            finibus congue quis et mauris. Ut hendrerit quam et felis
            scelerisque, quis tristique sem faucibus. Fusce egestas leo lorem,
            eu vehicula mauris tempus sed. Etiam et bibendum dui. Nam dignissim
            urna a lectus vehicula, eget eleifend erat auctor. Sed eu lectus at
            nibh ultrices fermentum. Vivamus condimentum magna sed erat posuere,
            a pulvinar felis pretium. Curabitur non interdum felis. Nulla
            rhoncus cursus neque, non dictum ante viverra commodo. Aenean a
            dolor mauris. Donec a lacus placerat, dapibus ipsum at, malesuada
            arcu. Etiam facilisis magna a dignissim fringilla.
          </Text>
          <Text>
            Phasellus ullamcorper eget nulla sit amet euismod. Duis vitae
            pellentesque purus, ut ultrices dolor. In at gravida urna. Mauris a
            mattis orci. Ut interdum vulputate luctus. Integer dictum varius
            imperdiet. Pellentesque sagittis quam ullamcorper, convallis libero
            aliquet, viverra lectus. Maecenas venenatis tortor in nulla lacinia,
            eu posuere neque aliquam. Mauris fermentum dui gravida, faucibus ex
            eu, convallis tortor. Proin aliquam, enim eget suscipit
            sollicitudin, magna tortor cursus velit, et vulputate magna tortor
            nec dui. Maecenas commodo hendrerit est congue semper. Nam aliquet
            mauris vel diam feugiat dapibus. Maecenas felis arcu, gravida in
            odio eu, luctus vehicula orci.
          </Text>
          <Text>
            Donec facilisis est vitae gravida lacinia. Donec tempus aliquet
            magna, id tincidunt urna aliquet at. Integer rutrum tempus turpis et
            pulvinar. Aliquam id lorem sed sapien accumsan mollis in a mauris.
            Aliquam mollis bibendum neque, vitae vehicula nisi. Nunc eu justo
            porttitor, suscipit quam eu, sodales turpis. Donec consectetur, ex a
            dignissim congue, dui diam pulvinar enim, id vehicula sapien dolor
            ac metus. Sed a sodales enim, nec gravida tortor. In faucibus, est
            eu mollis sagittis, leo felis dapibus est, nec consequat augue justo
            non turpis.
          </Text>
          <Text>
            Fusce consectetur, orci et faucibus blandit, libero magna rutrum
            ligula, vitae egestas leo ligula eu nisi. Cras id mauris id risus
            accumsan vehicula. Nunc mattis mauris pharetra neque elementum, nec
            mollis urna dapibus. Quisque dictum dui sit amet quam aliquet
            interdum. Suspendisse scelerisque dolor enim, et tincidunt tortor
            pellentesque quis. Sed id nunc scelerisque, lobortis diam eget,
            fermentum justo. Etiam magna odio, eleifend sed scelerisque id,
            malesuada ut purus.
          </Text>
          <Text>
            Sed ipsum est, suscipit lacinia nulla non, maximus tempor justo.
            Aliquam condimentum mi tellus, eu dictum orci fringilla nec. Integer
            placerat ligula in nibh blandit vehicula. Morbi blandit ultrices
            magna vitae rhoncus. Vestibulum vestibulum convallis lectus sit amet
            tempus. Morbi quam urna, gravida eget dui nec, vehicula egestas
            arcu. Nunc quis scelerisque arcu, eu dignissim eros. Nunc faucibus
            ornare magna in lacinia. Aenean nisi lacus, condimentum nec neque
            eget, dapibus euismod elit. Curabitur finibus lacus justo. Fusce
            viverra, arcu vitae venenatis viverra, nisl nulla cursus diam, vel
            ornare dui sem quis tellus. Phasellus vestibulum libero vel tellus
            bibendum vehicula eu at felis. Nulla augue leo, malesuada sit amet
            mauris in, sodales dapibus lorem.
          </Text>
          <Text>
            Nunc varius scelerisque dui sed cursus. Curabitur elit ex, consequat
            ut odio a, ullamcorper congue dui. Duis sagittis vel eros sit amet
            tincidunt. Maecenas ultricies vitae tellus in rhoncus. Proin
            pellentesque, nulla at efficitur malesuada, elit tellus placerat
            lacus, mattis elementum quam libero ut neque. Proin scelerisque
            rutrum sapien sed tempor. Etiam semper tortor in ipsum tincidunt
            elementum. Praesent in ex augue. Aenean vel lectus lacinia urna
            laoreet imperdiet nec vel urna. Vivamus facilisis sagittis
            vulputate. Sed enim sapien, pellentesque et maximus eu, sollicitudin
            vel eros. Morbi commodo diam magna, sed molestie urna vulputate
            vitae. Curabitur ut sapien eu tortor dignissim accumsan.
          </Text>
          <Text>
            In fringilla nisl et massa volutpat posuere. Cras et odio vitae
            mauris tempor pretium quis non mauris. Phasellus orci augue,
            venenatis interdum gravida in, viverra at orci. Morbi varius
            condimentum neque, ut pulvinar tellus malesuada ut. Vivamus finibus
            lacinia ligula, auctor scelerisque nisl finibus sit amet. Quisque
            placerat orci vitae imperdiet luctus. Proin dignissim dolor eu
            libero feugiat vestibulum. Maecenas posuere sapien nec quam semper,
            ullamcorper vestibulum nibh pharetra. Maecenas sit amet dolor porta,
            dapibus urna et, ultricies libero. Maecenas dignissim pellentesque
            arcu, ut placerat odio varius et. Mauris pellentesque sapien et
            neque condimentum, posuere vulputate ex venenatis. Nullam
            scelerisque commodo est, at elementum erat molestie nec. Mauris vel
            dolor consequat, ornare elit vel, feugiat dolor.
          </Text> */}
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View</Button>
        <Button>Join</Button>
      </Card.Footer>
    </Card.Root>
  );
};
